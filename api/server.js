const express = require('express');
const fs = require('fs').promises;
const path = require('path');
const app = express();
const port = 3000;

// Middleware para permitir CORS (acesso do front-end)
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET');
    next();
});

// Middleware para parsear JSON
app.use(express.json());

// Caminho para o arquivo JSON
const profissionaisFile = path.join(__dirname, 'profissionais.json');

// Endpoint para listar todos os profissionais
app.get('/profissionais', async (req, res) => {
    try {
        const data = await fs.readFile(profissionaisFile, 'utf8');
        const profissionais = JSON.parse(data);
        res.json(profissionais);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao ler os dados' });
    }
});

// Endpoint para filtrar por especialidade
app.get('/profissionais/especialidade/:especialidade', async (req, res) => {
    const especialidade = req.params.especialidade.toLowerCase();
    try {
        const data = await fs.readFile(profissionaisFile, 'utf8');
        const profissionais = JSON.parse(data);
        const filtered = profissionais.filter(prof =>
            prof.especialidade.toLowerCase().includes(especialidade)
        );
        res.json(filtered);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao filtrar por especialidade' });
    }
});

// Endpoint para pesquisar por nome
app.get('/profissionais/nome/:nome', async (req, res) => {
    const nome = req.params.nome.toLowerCase();
    try {
        const data = await fs.readFile(profissionaisFile, 'utf8');
        const profissionais = JSON.parse(data);
        const filtered = profissionais.filter(prof =>
            prof.nome.toLowerCase().includes(nome)
        );
        res.json(filtered);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao pesquisar por nome' });
    }
});

// Iniciar o servidor
app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});