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

echo "                                                     "
echo "${PURPLE} ______${BLUE}        ${PURPLE}_____  ${BLUE}_______  ${PURPLE}____   ${BLUE}_____ ${PURPLE}__     __"
echo "${PURPLE}|  ____|${BLUE}/\    ${PURPLE}/ ____|${BLUE}|__   __|${PURPLE}/ __ \ ${BLUE}|  __ \\${PURPLE}\\ \   / /"
echo "${PURPLE}| |__${BLUE}  /  \  ${PURPLE}| |        ${BLUE}| |  ${PURPLE}| |  | |${BLUE}| |__) |${PURPLE}\ \_/ / "
echo "${PURPLE}|  __|${BLUE}/ /\ \ ${PURPLE}| |        ${BLUE}| |  ${PURPLE}| |  | |${BLUE}|  _  /  ${PURPLE}\   /  "
echo "${PURPLE}| |${BLUE}  / ____ \\${PURPLE}| |____    ${BLUE}| |  ${PURPLE}| |__| |${BLUE}| | \ \   ${PURPLE}| |   "
echo "${PURPLE}|_|${BLUE} /_/    \_\\${PURPLE}\\_____|   ${BLUE}|_|   ${PURPLE}\____/ ${BLUE}|_|  \_\  ${PURPLE}|_|   ${RESET}"
echo ""
echo "                   ) ) )                  "
echo "                  ( ( (                   "
echo "                 ) ) )                    "
echo "               (~~~~~~~~~)                "
echo "                | ALYFE |                 "
echo "                |       |                 "
echo "                I       _._               "
echo "                I     /'    \             "
echo "                I    |   N   |            "
echo "                f    |    |~~~~~~~~~~~~~~|"
echo "              .'     |    | |~~~~~~~~|   |"
echo "            /'_______|____|_|__###___|___|"
echo ""
echo ""
echo ""
echo "${BLUE}Welcome to the help for your CLI 'factory'${RESET}"
echo ""
echo "Usage: ${GREEN}factory ${CYAN}<command> ${PURPLE}<argument>${RESET}"
echo ""
echo "${BLEU}Available commands:${RESET}"
echo ""
echo "  ${CYAN}run${RESET}"
echo ""
echo "    ${PURPLE}traefik${RESET} : Start Traefik" 
echo "    ${PURPLE}dashboard${RESET} : Starts the graphical interface and the API"
echo "    ${PURPLE}api${RESET} : Starts the API only"
echo ""
echo "  ${CYAN}init${RESET} : Initialize an app from a template"
echo ""
echo "    ${PURPLE}<template>${GREY}(required)${RESET} :" 
echo "    The name of the template to use for initializing the app."
echo "    This determines the base configuration and setup for your new application."
echo ""
echo "    ${PURPLE}<app_name> :${RESET}"
echo "    The name of the application being initialized."
echo "    This is the name of the directory that will be created."
echo ""
echo "    ${PURPLE}<domain_name> :${RESET}"
echo "    The domain name to be associated with the new application."
echo ""
echo "  ${YELOW}--templates${RESET} : Show List of available templates"
echo ""
echo ""
echo "  ${YELOW}--help${RESET} : Show this help"
echo ""
