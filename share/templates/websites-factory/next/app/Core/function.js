const fs = require('fs');
const path = require('path');

export const getJson = (pathFile) => {
    try {
        const jsonDirectory = path.join(process.cwd(), `/app/${pathFile}`);
        const data = fs.readFileSync(jsonDirectory, 'utf8');
        return JSON.parse(data);
    } catch (error) {
        console.error(`Error reading JSON file :`, error);
        return null;
    }
};


export const getComponent = (pathFile) => {

    let Component
    try {
        Component = require(`@/app/${pathFile}`).default
    }
    catch {
        console.log('err');
    }
    return Component
}

export const getElementsByType = (config, elementType) => {
    const enabledElements = {}
    const elementsResponse = {}

    // Récupération éléments actifs depuis la config (modules, extensions...)
    for (const property in config) {
        const elements = config[property].filter((element) => element.enabled).map((element) => {

            return element.name
        })
        // {type d'élément : nom de l'élément}
        enabledElements[property] = elements

    }

    // Récupérations des pages dans les éléments actifs
    for (const elementEnabled in enabledElements) {
        // Pour chaque type d'élément...
        enabledElements[elementEnabled].map((element) => {
            //...on recherche les dossiers dans /app/type d'élément/élément/pages
            const directoryPath = path.join(process.cwd(), `/app/${elementEnabled}/${element}/${elementType}`);
            elementsResponse[element] = {}
            try {
                const files = fs.readdirSync(directoryPath, { withFileTypes: true });
                files
                    .filter(file => file.isDirectory())
                    .map(dir =>
                        elementsResponse[element][dir.name] = `${elementEnabled}/${element}/${elementType}/${dir.name}`

                    );
            }
            catch {

            }
        })
    }
    return elementsResponse
}

export const getExtenstionConfig = (config, extensionName) => {
    const extension = config.elements.extensions.find((extension) => {
        return extension.name === extensionName
    })
    if (extension?.config)
        return extension?.config

}

export const normalizeFromMapping = (elements, elementConfig) => {
    const { mapping } = elementConfig

    if (!elements)
        return []
    const elementsNormalized = elements.map((element) => {
        for (const property in mapping) {
            element[property] = element[mapping[property]]
        }
        return element
    }
    )

    return elementsNormalized
}