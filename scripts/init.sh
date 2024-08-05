#!/bin/bash

GREEN=$'\033[0;32m'
RED=$'\033[0;31m' 
BLUE=$'\033[0;34m' 
CYAN=$'\033[0;36m' 
WHITE=$'\033[0;37m' 
GREY=$'\033[0;90m' 
RESET=$'\033[0m'

SUBCOMMAND=$1
TEMPLATE_DIR="/usr/local/share/factory/templates"
MATCH_FOUND=false
SSL_OPTION=""
NAME=""
DOMAIN=""
ENTRYPOINTCHOICE=""

if [ -z "$1" ]; then
    echo "Erreur : Aucun template fourni."
    exit 1
fi

for dir in "$TEMPLATE_DIR"/*/; do

base_name=$(basename "$dir")

    if [ "$base_name" == "$1" ]; then
        MATCH_FOUND=true
        break
    fi

done

if [ "$MATCH_FOUND" = false ]; then
    echo "pas de template nommé '$1'"
    exit 1
fi


SITES_DIR="${PWD}"

validate_website_name() {

    EXIST=$(docker ps -a --filter "name=$WEBSITE_NAME" --format '{{.Names}}')

    if [[ "$TEST" == "" ]]; then
    return 1
    else
     echo "${RED}Error: A app with the name \"${WEBSITE_NAME}\" already exists.${RESET}"
    fi


}

enter_website_name(){
    read -p "Choose the app name: " WEBSITE_NAME
    if  validate_website_name "$WEBSITE_NAME"; then
        echo "${RED}Error: A site with the name "${WEBSITE_NAME}" already exists.${RESET}"
        enter_website_name
    else
        NAME=$WEBSITE_NAME
        return 1   
    fi
}

if [ "$#" -eq 1 ]; then
    enter_website_name
    read -p "Enter your domain name: " DOMAIN

elif [ "$#" -eq 2 ]; then
    NAME=$2
    read -p "Enter your domain name: " DOMAIN
elif [ "$#" -eq 3 ]; then
    NAME=$2
    validate_website_name "$NAME"
    DOMAIN=$3
elif [ "$#" -eq 4 ]; then
    NAME=$2
    validate_website_name "$NAME"
    DOMAIN=$3
    SSL_OPTION=$4
elif [ "$#" -eq 5 ]; then
    NAME=$2
    validate_website_name "$NAME"
    DOMAIN=$3
    SSL_OPTION=$4
    SITES_DIR="$HOME" 

else
    echo "${RED}Error: Too many arguments${RESET}"
    exit 0
fi

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
        [yY]|[yY][eE][sS]|[oO]) return 0;;  # Yes
        [nN]|[nN][oO]) return 1;;  # No
        *) echo "Invalid response. Please answer 'y' for yes or 'n' for no." ; exit 1 ;;
    esac
}
# Ask for confirmation to enable SSL and set variable based on response


if [ -n "$SSL_OPTION" ]; then
    if [ "$SSL_OPTION" == "--ssl" ]; then
        ENTRYPOINTCHOICE="websecure"
    elif [ "$SSL_OPTION" == "--nossl" ]; then
        ENTRYPOINTCHOICE="web"
    else
        echo "Invalid option: $SSL_OPTION"
        exit 1
    fi
else    
    # Demander confirmation pour activer SSL
    if confirm "${BLUE}Do you want to enable SSL?${GREY} (y/n)${RESET}" "y"; then
        ENTRYPOINTCHOICE="websecure"
    else
        ENTRYPOINTCHOICE="web"
    fi
fi


TEMPLATE_DIR="/usr/local/share/factory/templates/${SUBCOMMAND}"
NEW_SITE_DIR="${SITES_DIR}/${NAME}"
ENV_FILE="${NEW_SITE_DIR}/.env"


if [ ! -d "$TEMPLATE_DIR" ]; then
    echo "Erreur : $TEMPLATE_DIR n'existe pas."
    exit 1
fi

cp -r "$TEMPLATE_DIR/." "$NEW_SITE_DIR"

cd "$NEW_SITE_DIR"

source $ENV_FILE
eval $CMD

echo 

if [ -f "$ENV_FILE" ]; then
    # Remplir les variables d'environnement
    echo "WEBSITE_NAME=${NAME}" > "$ENV_FILE"
    echo "DOMAIN_WEBSITE=${DOMAIN}" >> "$ENV_FILE"
    echo "ENTRYPOINT=${ENTRYPOINTCHOICE}" >> "$ENV_FILE"
else
    echo "Erreur : fichier .env non trouvé dans $NEW_SITE_DIR."
    exit 1
fi

cd "$NEW_SITE_DIR"
 
if [[ "$ENTRYPOINTCHOICE" == "web" ]]; then
    docker compose --profile nossl up -d
else
    docker compose --profile ssl up -d
fi

if [ $? -eq 0 ]; then
    echo "Conteneurs Docker démarrés avec succès dans $NEW_SITE_DIR."
else
    echo "Erreur : Échec du démarrage des conteneurs Docker."
    exit 1
fi
