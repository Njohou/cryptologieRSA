import mysql.connector as MC
import hashlib, binascii
import sys
from Crypto.PublicKey import RSA
from hashlib import sha1

try:
    db = MC.connect(
        host="localhost",
        user="root",
        password="",
        database="cryptologie"
    )


except MC.Error as err:
    print(err)
finally:
    if (db.is_connected()):
        db.close()