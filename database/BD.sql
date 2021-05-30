CREATE TABLE register (
acte_number VARCHAR(255) NOT NULL PRIMARY KEY,
hache VARCHAR(500) NOT NULL,
signature VARCHAR(500) NOT NULL,
center_etat INT(32) NOT NULL,
FOREIGN KEY (center_etat) REFERENCES centre_etat_civil(idcenter)
)ENGINE=INNODB;

