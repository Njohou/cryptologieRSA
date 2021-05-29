import mysql.connector as MC
import hashlib, binascii
from Crypto.PublicKey import RSA

keyPair = RSA.generate(bits=1024)
print(f"Public key:  (n={hex(keyPair.n)}, e={hex(keyPair.e)})")
print(f"Private key: (n={hex(keyPair.n)}, d={hex(keyPair.d)})")
print(type(hex(keyPair.d)))


try:
    # connexion à la base de données
    db = MC.connect(
        host = "localhost",
        user = "root",
        password = "",
        database = "cryptologie"
    )
    # Recupérer les autres champs de la base de données

    # hachage des données concaténées
    sha1_hash = hashlib.sha1(b'hello').digest()
    final_hash = binascii.hexlify(sha1_hash)

    # Recupérer les clés en base de données

    # Signer le haché avec la clé privée

    # Stocker les informations en base de données.

except MC.Error as err:
    print(err)
finally:
    if(db.is_connected()):
        db.close()



