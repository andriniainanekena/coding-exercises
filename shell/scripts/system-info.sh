#!/bin/bash

echo "Utilisateur : $USER"
echo "Nom d'hôte : $(hostname)"
echo "Version du noyau : $(uname -r)"
echo "Système : $(uname -o)"
echo "RAM disponible : $(free -h | awk '/Mem:/ {print $7}')"
echo "Espace disque disponible : $(df -h / | awk 'NR==2 {print $4}')"
echo "Temps de fonctionnement : $(uptime -p)"
