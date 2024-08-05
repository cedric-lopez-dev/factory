#!/bin/bash

PORT=3030

# Trouver le PID du processus utilisant le port
PID=$(lsof -t -i :$PORT)

# Vérifier si un PID a été trouvé
if [ -n "$PID" ]; then
    echo "Le port $PORT est utilisé par le processus PID $PID."
    echo "Arrêt du processus $PID..."

    # Arrêter le processus
    kill $PID

    # Vérifier si le processus a été arrêté avec succès
    if [ $? -eq 0 ]; then
        echo "Le port $PORT a été libéré."
    else
        echo "Erreur lors de l'arrêt du processus $PID."
    fi
else
    echo "Aucun processus n'utilise le port $PORT."
fi

cd /usr/local/share/factory/factory-api

npm install

nohup npm start &> /dev/null &

exit 0


