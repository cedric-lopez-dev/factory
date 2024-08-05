'use server'

export const execCommand = async (command) => {
    return fetch('http://host.docker.internal:3030/execute', {
        method: "POST",
        headers: {
            'Authorization': 'Bearer FbA5M6EoGhfyoZIj4j8rS7JTHR3b1iveQUWXD9H09bhT8dc3AWlCcIuobh4YYI0QqSFXbTdJiIPrGXYrdgEFKdgXVLoZUhGccpOq36Hoi12VJlYYwlxt8iA17OBUAU',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ command }),
    })
        .then((res) => res.json())
}

export const getTemplates = async () => {
    return fetch('http://host.docker.internal:3030/template/list')
        .then((res) => res.json())
}