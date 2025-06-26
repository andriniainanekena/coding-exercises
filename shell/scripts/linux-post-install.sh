#!/bin/bash

if [ "$EUID" -ne 0 ]; then
  echo "Merci d'exécuter ce script avec sudo."
  exit 1
fi

echo "Mise à jour de la liste des paquets..."
apt update

echo "Mise à niveau des paquets installés..."
apt upgrade -y

echo "Suppression des paquets inutiles..."
apt autoremove -y

echo "Installation des outils utiles..."
apt install -y curl wget git build-essential net-tools htop tree unzip zip

echo "Installation de Vim..."
apt install -y vim

echo "Installation de Python, Node.js, et OpenJDK..."
apt install -y python3 python3-pip nodejs npm openjdk-17-jdk

echo "Installation de VLC et LibreOffice..."
apt install -y vlc libreoffice

echo "Installation de tmux et neofetch..."
apt install -y tmux neofetch

echo "Installation de PostgreSQL..."
if ! dpkg -l | grep -qw postgresql; then
  apt install -y postgresql postgresql-contrib
else
  echo "PostgreSQL déjà installé."
fi

echo "Toutes les opérations sont terminées."

