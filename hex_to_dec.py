import re

def hex_to_dec(match):
    hex_value = match.group(0)
    # Remove any leading underscores, single quotes, or negative signs
    stripped_hex = hex_value.replace('_', '').replace("'", "")
    if stripped_hex.startswith('0x'):
        dec_value = str(int(stripped_hex, 16))
    elif stripped_hex.startswith('-0x'):
        dec_value = str(-int(stripped_hex[3:], 16))  # Handle negative hex
    else:
        return hex_value  # If it doesn't match expected patterns, return as is
    return dec_value

def replace_hex_with_dec(file_path):
    with open(file_path, 'r') as file:
        content = file.read()

    # Pattern to match hexadecimal values including negative hex values
    hex_pattern = r'-?0x[0-9a-fA-F]+|\'-?0x[0-9a-fA-F]+\'|_"0x[0-9a-fA-F]+"'
    
    # Replace hex values with decimal values
    updated_content = re.sub(hex_pattern, hex_to_dec, content)

    output_file_path = 'hex_to_dec_converted_' + file_path
    with open(output_file_path, 'w') as file:
        file.write(updated_content)

    print(f"File processed. Output written to {output_file_path}")

# Replace 'input.txt' with your actual file name
replace_hex_with_dec('malware.js')
