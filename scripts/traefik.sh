#!/bin/bash

# Assurez-vous que le script est exécuté depuis le répertoire du script
cd "$(dirname "$0")"

GREEN=$'\033[0;32m'
RED=$'\033[0;31m' 
BLUE=$'\033[0;34m' 
CYAN=$'\033[0;36m' 
WHITE=$'\033[0;37m' 
GREY=$'\033[0;90m' 
RESET=$'\033[0m'

# Function to ask for confirmation
confirm() {
    local prompt="$1"
    local default="$2"
    local response

    # Display prompt with default value
    echo -n "$prompt [${default}] "
    read -r response
    response=${response:-$default}

    # Check response
    case "$response" in
        [yY]|[yY][eE][sS]|[oO]) return 0 ;;  # Yes
        [nN]|[nN][oO]) return 1 ;;  # No
        *) echo "Invalid response. Please answer 'y' for yes or 'n' for no." ; exit 1 ;;
    esac
}
# Ask for confirmation to enable SSL and set variable based on response
if confirm "${BLUE}Do you want to enable SSL?${GREY} (y/n)${RESET}" "y"; then

    SSL=true
else
    SSL=false
fi

# Répertoire cible
TARGET_DIR="/usr/local/share/factory/traefik"

ENV_FILE="${TARGET_DIR}/.env"

if [[ "$SSL" == true ]]; then
    # Ask for the user's email
    read -p "Please enter your email: " EMAIL

    # Check if the email was provided
    if [[ -z "${EMAIL}" ]]; then
        echo "Error: No email provided."
        exit 1
    fi

    echo "EMAIL=${EMAIL}" > "$ENV_FILE"
fi

# Créer le réseau Docker si nécessaire
if ! docker network inspect traefik >/dev/null 2>&1; then
    echo "Création du réseau Docker 'traefik'"
    docker network create traefik
fi
cd "${TARGET_DIR}" || exit 1
# Lancer docker-compose

if [[  $SSL == "false" ]]; then
    docker compose --profile nossl up -d
else
    docker compose --profile ssl up -d
fi

echo "Traefik up!"
