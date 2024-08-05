import express from 'express';
import { exec } from 'child_process';
import fs from 'fs';
import path from 'path';

const app = express();
const port = 3030;
app.use(express.json());

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization, accountid, access-token');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});


const authenticate = (req, res, next) => {
    const token = req.headers['authorization'];
    if (token === "Bearer FbA5M6EoGhfyoZIj4j8rS7JTHR3b1iveQUWXD9H09bhT8dc3AWlCcIuobh4YYI0QqSFXbTdJiIPrGXYrdgEFKdgXVLoZUhGccpOq36Hoi12VJlYYwlxt8iA17OBUAU") {
        next();
    } else {
        res.status(403).send("Forbidden");
    }
};
app.get('/', (req, res) => {
    res.send({ response: "Yo!" })
})

app.post('/execute', authenticate, (req, res) => {

    const { command } = req.body;

    // if (!command.startsWith('factory')) {
    //     return res.status(403).send('Command not allowed');
    // }

    exec(command, (error, stdout, stderr) => {
        if (error) {
            return res.status(500).json({ error: stderr });
        }
        res.json({ output: stdout });
    });
});

app.get('/template/list', async (req, res) => {
    try {
        const files = await fs.promises.readdir('/usr/local/share/factory/templates');
        // Filtrer pour obtenir uniquement les dossiers
        const directories = (await Promise.all(
            files.map(async (file) => {
                const filePath = path.join('/usr/local/share/factory/templates', file);
                const stats = await fs.promises.stat(filePath);
                return stats.isDirectory() ? file : null;
            })
        )).filter(Boolean); // Filtrer les valeurs nulles

        // Envoyer la liste des dossiers en réponse
        res.send({ templates: directories });
    } catch (error) {
        console.error('Error reading directory:', error);
        res.status(500).send({ error: 'Internal Server Error' });
    }
})

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});