#!/bin/bash

# Check if the script is being run with administrative privileges
if [ "$(id -u)" -ne 0 ]; then
    echo "This script must be run as root"
    exit 1
fi

GREEN=$'\033[0;32m'
RED=$'\033[0;31m' 
BLUE=$'\033[0;34m' 
CYAN=$'\033[0;36m' 
WHITE=$'\033[0;37m' 
GREY=$'\033[0;90m' 
YELOW=$'\033[0;93m'
RESET=$'\033[0m'



# Define variables
INSTALL_DIR="/usr/local/bin"
CLI_NAME="factory"
SHARE_SRC_DIR="share"
SHARE_DEST_DIR="/usr/local/share/${CLI_NAME}"
SCRIPTS_DIR="${CLI_NAME}-scripts" 
SOURCE_SCRIPTS_DIR="scripts"  # Source directory containing the scripts
TRAEFIK_SRC="traefik-ssl"

# Check if the source directory for scripts exists
if [[ ! -d "${SOURCE_SCRIPTS_DIR}" ]]; then
    echo "Source directory ${SOURCE_SCRIPTS_DIR} does not exist."
    exit 1
fi

# Create the destination directory for the scripts
mkdir -p "${INSTALL_DIR}/${SCRIPTS_DIR}"
rm -rf "${INSTALL_DIR}/${SCRIPTS_DIR}"/*

# Copy the CLI file to the installation directory and apply execution permissions
cp "${CLI_NAME}" "${INSTALL_DIR}/${CLI_NAME}"
chmod +x "${INSTALL_DIR}/${CLI_NAME}"

# Copy the scripts to the destination directory and apply chmod +x
for script in "${SOURCE_SCRIPTS_DIR}"/*; do
    if [[ -f "$script" ]]; then
        cp "$script" "${INSTALL_DIR}/${SCRIPTS_DIR}/"
        chmod +x "${INSTALL_DIR}/${SCRIPTS_DIR}/$(basename "$script")"
    fi
    
done

if [[ ! -d "${SHARE_SRC_DIR}" ]]; then
    echo "Source directory ${SHARE_SRC_DIR} does not exist."
    exit 1
fi

# Create the destination directory for sharing
mkdir -p "${SHARE_DEST_DIR}"
rm -rf "${SHARE_DEST_DIR:?}/"*

# Copy the entire share directory to the destination directory
cp -r "${SHARE_SRC_DIR}/." "${SHARE_DEST_DIR}/"
cp -r "traefik/." "${SHARE_DEST_DIR}/traefik"
chown -R $SUDO_USER "${SHARE_DEST_DIR}"

echo "" 
echo "${GREEN}Installation complete.${RESET}" 
echo "" 
echo "Use ${GREEN}${CLI_NAME} ${YELOW}--help${RESET} to see available commands.${RESET}"
echo "" 
