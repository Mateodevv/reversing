import re

def process_file(input_file, output_file):
    lines = ""
    with open(input_file, 'r') as file:
         lines = file.read()
    print(lines)
    pattern_for_function = r'return\s+Map_Index_To_String\s*\([^()]*\)'
    pattern_for_first_param = r'Map_Index_To_String\(\s*([^,]+),'
    matches = re.findall(pattern_for_function, lines)
    for match in matches:
        a = re.search(pattern_for_first_param, match)
        a = a.group(1).strip()
        a = a.replace("_", "")
        a = a.replace("'", "")
        print(a)
process_file("malware.js", "test")