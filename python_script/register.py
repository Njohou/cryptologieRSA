import mysql.connector as MC
import hashlib, binascii
import sys
from Crypto.PublicKey import RSA
from hashlib import sha1

try:
    # connexion à la base de données
    db = MC.connect(
        host = "localhost",
        user = "root",
        password = "",
        database = "cryptologie"
    )
    region = sys.argv[3]
    departement = sys.argv[4]
    arrondissement = sys.argv[5]
    myconn = db.cursor()

    # keyPair = RSA.generate(bits=1024)
    # sql = "INSERT INTO centre_etat_civil(region, departement, arrondissement, public_key, private_key, module_n) VALUES (%s, %s, %s, %s, %s, %s)"
    # value = (region, departement, arrondissement, hex(keyPair.e), hex(keyPair.d), hex(keyPair.n))
    # myconn.execute(sql, value)
    # db.commit()
    # print(myconn.rowcount, "data inserted")

    # Recupérer les autres champs de la base de données

    # hachage des données concaténées
    sha1_hash = int.from_bytes(sha1(sys.argv[1].encode('utf-8')).digest(), byteorder='big')
    # Recupérer les clés en base de données
    sql = "SELECT idcenter, private_key, module_n from centre_etat_civil WHERE region = %s AND departement = %s AND arrondissement = %s"
    value = (region, departement, arrondissement,)
    myconn.execute(sql, value)
    Pk_mod = myconn.fetchone()
    # Signer le haché avec la clé privée
    signature = pow(sha1_hash, int(Pk_mod[1], 0), int(Pk_mod[2], 0))
    # Stocker les informations en base de données.
    sql2 = "INSERT INTO register(acte_number, hache, signature, center_etat) VALUES (%s, %s, %s, %s)"
    data = (sys.argv[2], hex(sha1_hash), hex(signature), Pk_mod[0])
    myconn.execute(sql2, data)
    db.commit()
    print(myconn.rowcount, "data inserted !")

except MC.Error as err:
    print(err)
finally:
    if(db.is_connected()):
        db.close()



