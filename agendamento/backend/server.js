const express = require('express');
const fs = require('fs').promises;
const path = require('path');
const app = express();
const port = 3001; // Porta diferente da API anterior

// Middleware para CORS
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, DELETE');
    next();
});

// Middleware para parsear JSON
app.use(express.json());

// Caminhos dos arquivos
const profissionaisFile = path.join(__dirname, 'profissionais.json');
const agendamentosFile = path.join(__dirname, 'agendamentos.json');

// Listar especialidades
app.get('/especialidades', async (req, res) => {
    try {
        const data = await fs.readFile(profissionaisFile, 'utf8');
        const profissionais = JSON.parse(data);
        const especialidades = [...new Set(profissionais.map(p => p.especialidade))];
        res.json(especialidades);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao listar especialidades' });
    }
});

// Listar profissionais por especialidade
app.get('/profissionais/:especialidade', async (req, res) => {
    const especialidade = req.params.especialidade;
    try {
        const data = await fs.readFile(profissionaisFile, 'utf8');
        const profissionais = JSON.parse(data);
        const filtered = profissionais.filter(p => p.especialidade === especialidade);
        res.json(filtered);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao listar profissionais' });
    }
});

// Listar datas disponíveis para um profissional
app.get('/disponibilidade/:profissionalId', async (req, res) => {
    const profissionalId = parseInt(req.params.profissionalId);
    try {
        const profData = await fs.readFile(profissionaisFile, 'utf8');
        const profissionais = JSON.parse(profData);
        const profissional = profissionais.find(p => p.id === profissionalId);
        if (!profissional) {
            return res.status(404).json({ error: 'Profissional não encontrado' });
        }

        const agendData = await fs.readFile(agendamentosFile, 'utf8');
        const agendamentos = JSON.parse(agendData);
        const agendados = agendamentos
            .filter(a => a.profissionalId === profissionalId)
            .map(a => a.data);

        const disponiveis = profissional.disponibilidade.filter(
            data => !agendados.includes(data)
        );
        res.json(disponiveis);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao listar disponibilidade' });
    }
});

// Registrar um agendamento
app.post('/agendamentos', async (req, res) => {
    const { nome, cpf, especialidade, profissionalId, data } = req.body;
    if (!nome || !cpf || !especialidade || !profissionalId || !data) {
        return res.status(400).json({ error: 'Dados incompletos' });
    }

    try {
        const profData = await fs.readFile(profissionaisFile, 'utf8');
        const profissionais = JSON.parse(profData);
        const profissional = profissionais.find(p => p.id === parseInt(profissionalId));
        if (!profissional || !profissional.disponibilidade.includes(data)) {
            return res.status(400).json({ error: 'Data indisponível ou profissional inválido' });
        }

        const agendData = await fs.readFile(agendamentosFile, 'utf8');
        const agendamentos = JSON.parse(agendData);
        const novoAgendamento = {
            id: agendamentos.length + 1,
            nome,
            cpf,
            especialidade,
            profissionalId: parseInt(profissionalId),
            profissionalNome: profissional.nome,
            data
        };
        agendamentos.push(novoAgendamento);
        await fs.writeFile(agendamentosFile, JSON.stringify(agendamentos, null, 2));
        res.json({ message: 'Agendamento registrado com sucesso', agendamento: novoAgendamento });
    } catch (error) {
        res.status(500).json({ error: 'Erro ao registrar agendamento' });
    }
});

// Pesquisar agendamentos por CPF
app.get('/agendamentos/:cpf', async (req, res) => {
    const cpf = req.params.cpf;
    try {
        const data = await fs.readFile(agendamentosFile, 'utf8');
        const agendamentos = JSON.parse(data);
        const filtered = agendamentos.filter(a => a.cpf === cpf);
        res.json(filtered);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao pesquisar agendamentos' });
    }
});

// Cancelar um agendamento
app.delete('/agendamentos/:id', async (req, res) => {
    const id = parseInt(req.params.id);
    try {
        const data = await fs.readFile(agendamentosFile, 'utf8');
        let agendamentos = JSON.parse(data);
        const index = agendamentos.findIndex(a => a.id === id);
        if (index === -1) {
            return res.status(404).json({ error: 'Agendamento não encontrado' });
        }
        agendamentos = agendamentos.filter(a => a.id !== id);
        await fs.writeFile(agendamentosFile, JSON.stringify(agendamentos, null, 2));
        res.json({ message: 'Agendamento cancelado com sucesso' });
    } catch (error) {
        res.status(500).json({ error: 'Erro ao cancelar agendamento' });
    }
});

// Iniciar o servidor
app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});