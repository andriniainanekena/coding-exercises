#!/bin/bash

fichier="$HOME/.todo"

touch "$fichier"

afficher() {
    echo "Tâches enregistrées :"
    if [ ! -s "$fichier" ]; then
        echo "Aucune tâche."
    else
        nl "$fichier"
    fi
}

ajouter() {
    read -p "Entrer la nouvelle tâche : " tache
    echo "$tache" >> "$fichier"
    echo "Tâche ajoutée."
}

supprimer() {
    afficher
    read -p "Numéro de la tâche à supprimer : " num
    sed -i "${num}d" "$fichier"
    echo "Tâche supprimée."
}

while true; do
    echo ""
    echo "1 - Voir les tâches"
    echo "2 - Ajouter une tâche"
    echo "3 - Supprimer une tâche"
    echo "4 - Quitter"
    read -p "Choix : " choix

    case $choix in
        1) afficher ;;
        2) ajouter ;;
        3) supprimer ;;
        4) exit ;;
        *) echo "Choix invalide." ;;
    esac
done
