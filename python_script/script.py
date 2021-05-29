import hashlib, binascii
sha1_hash = hashlib.sha1(b'hello').digest()
print("SHA1('hello') =", binascii.hexlify(sha1_hash))