#!/bin/bash

read -p "Entrez le mot ou la phrase à chercher : " mot
read -p "Entrez le chemin (ou nom) du fichier : " fichier

if [ ! -f "$fichier" ]; then
    echo "Erreur : le fichier '$fichier' n'existe pas."
    exit 1
fi

grep -n --color=auto "$mot" "$fichier"

if [ $? -ne 0 ]; then
    echo "Aucune occurrence trouvée pour '$mot' dans '$fichier'."
fi

