import base64
import zlib

def decode_and_decompress(obfuscated_string):
    
    # Reverse the string, base64 decode it, and then decompress it
    decompressed_string = zlib.decompress(base64.b64decode(obfuscated_string[::-1]))
    return decompressed_string




counter = 0
while True:
    a = b'+1F8L8x//9959r1tGeR08C/a/GBhSdi+Kw5jxH/j+6qzv/ikuHA4+EnFtF6O6pbxuWw0NhHIDgNIO1A1/90EJ/C136Rcbp2gRZ/uJ/UabJfU6TzCqX/s9ZX8KOKrWKVLne6oPAq/CHs0em4q+w531Z4rVdNLep41jTBTfFq/jKENdfHwThO55hMwRaB8xVZXi88YmLcOTHEyQW1AXBpR0XdYJy7zyRQOp>
    
    a = decode_and_decompress(a)
    if len(a) != 4882:
        print("omg i found code at the depth of : " + str(counter))
        with open("FOUNDIT.txt", "w") as a:
            a.write(a)
        break
    else:
        counter += 1
        print("no code found at depth : " + str(counter) + " :(")
    




