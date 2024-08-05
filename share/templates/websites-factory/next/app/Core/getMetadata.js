export const getMetadata = (metadata) => {

    const test = replaceVariables(metadata.title, { city: "austin", name: "toto" })
    return test
}

const replaceVariables = (template, variables) => {
    return template.replace(/{{(.*?)}}/g, (_, key) => {
        const trimmedKey = key.trim();
        return variables.hasOwnProperty(trimmedKey) ? variables[trimmedKey] : `{{${trimmedKey}}}`;
    });
};