#!/bin/bash

GREEN=$'\033[0;32m'
PURPLE=$'\033[0;35m'
RED=$'\033[0;31m' 
BLUE=$'\033[0;34m' 
CYAN=$'\033[0;36m' 
WHITE=$'\033[0;37m' 
GREY=$'\033[0;90m'
YELOW=$'\033[0;93m'
RESET=$'\033[0m'

TEMPLATE_DIR="/usr/local/share/factory/templates"

    echo ""
    echo "${BLUE}List of available templates: :${RESET}"
    echo ""

for dir in "$TEMPLATE_DIR"/*/; do

    echo "- ${PURPLE}$(basename "$dir")${RESET}"

done

echo ""
echo "${GREEN}factory ${CYAN}init ${PURPLE}<template name>${RESET} to install an application"
echo ""
