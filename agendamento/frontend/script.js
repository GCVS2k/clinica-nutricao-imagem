document.addEventListener('DOMContentLoaded', () => {
    carregarEspecialidades();
    document.getElementById('form-agendamento').addEventListener('submit', agendar);
    document.getElementById('form-pesquisa').addEventListener('submit', pesquisarAgendamentos);
});

async function carregarEspecialidades() {
    try {
        const response = await fetch('http://localhost:3001/especialidades');
        const especialidades = await response.json();
        const select = document.getElementById('especialidade');
        especialidades.forEach/esp ; {
            const option = document.createElement('option');
            option.value = esp;
            option.textContent = esp;
            select.appendChild(option);
        };
        select.addEventListener('change', carregarProfissionais);
    } catch (error) {
        console.error('Erro ao carregar especialidades:', error);
    }
}

async function carregarEspecialidades() {
    try {
        console.log('Carregando especialidades...');
        const response = await fetch('http://localhost:3001/especialidades');
        if (!response.ok) {
            throw new Error(`Erro HTTP: ${response.status}`);
        }
        const especialidades = await response.json();
        console.log('Especialidades recebidas:', especialidades);
        const select = document.getElementById('especialidade');
        select.innerHTML = '<option value="">Selecione uma especialidade</option>'; // Limpar opções
        especialidades.forEach(esp => {
            const option = document.createElement('option');
            option.value = esp;
            option.textContent = esp;
            select.appendChild(option);
        });
        select.addEventListener('change', carregarProfissionais);
    } catch (error) {
        console.error('Erro ao carregar especialidades:', error);
        alert('Erro ao carregar especialidades. Verifique o console para detalhes.');
    }
}

async function carregarProfissionais() {
    const especialidade = document.getElementById('especialidade').value;
    const profissionalSelect = document.getElementById('profissional');
    const dataSelect = document.getElementById('data');
    profissionalSelect.innerHTML = '<option value="">Selecione um profissional</option>';
    dataSelect.innerHTML = '<option value="">Selecione uma data</option>';
    profissionalSelect.disabled = true;
    dataSelect.disabled = true;

    if (!especialidade) {
        console.log('Nenhuma especialidade selecionada');
        return;
    }

    try {
        console.log(`Carregando profissionais para especialidade: ${especialidade}`);
        const response = await fetch(`http://localhost:3001/profissionais/${encodeURIComponent(especialidade)}`);
        if (!response.ok) {
            throw new Error(`Erro HTTP: ${response.status}`);
        }
        const profissionais = await response.json();
        console.log('Profissionais recebidos:', profissionais);
        if (profissionais.length === 0) {
            console.log('Nenhum profissional encontrado para a especialidade');
            alert('Nenhum profissional encontrado para a especialidade selecionada.');
            return;
        }
        profissionalSelect.disabled = false;
        profissionais.forEach(prof => {
            const option = document.createElement('option');
            option.value = prof.id;
            option.textContent = prof.nome;
            profissionalSelect.appendChild(option);
        });
        // Remover eventos anteriores para evitar duplicação
        profissionalSelect.removeEventListener('change', carregarDisponibilidade);
        profissionalSelect.addEventListener('change', carregarDisponibilidade);
    } catch (error) {
        console.error('Erro ao carregar profissionais:', error);
        alert('Erro ao carregar profissionais. Verifique o console para detalhes.');
    }
    
}
async function carregarDisponibilidade() {
    const profissionalId = document.getElementById('profissional').value;
    const dataSelect = document.getElementById('data');
    dataSelect.innerHTML = '<option value="">Selecione uma data</option>';
    dataSelect.disabled = true;

    if (!profissionalId) {
        console.log('Nenhum profissional selecionado');
        return;
    }

    try {
        console.log(`Carregando disponibilidade para profissional ID: ${profissionalId}`);
        const response = await fetch(`http://localhost:3001/disponibilidade/${profissionalId}`);
        if (!response.ok) {
            throw new Error(`Erro HTTP: ${response.status}`);
        }
        const datas = await response.json();
        console.log('Datas recebidas:', datas);
        if (datas.length === 0) {
            console.log('Nenhuma data disponível');
            alert('Nenhuma data disponível para este profissional.');
            return;
        }
        dataSelect.disabled = false;
        datas.forEach(data => {
            const option = document.createElement('option');
            option.value = data;
            option.textContent = data;
            dataSelect.appendChild(option);
        });
    } catch (error) {
        console.error('Erro ao carregar disponibilidade:', error);
        alert('Erro ao carregar disponibilidade. Verifique o console para detalhes.');
    }
}

async function agendar(event) {
    event.preventDefault();
    const especialidade = document.getElementById('especialidade').value;
    const profissionalId = document.getElementById('profissional').value;
    const data = document.getElementById('data').value;
    const nome = document.getElementById('nome').value;
    const cpf = document.getElementById('cpf').value;

    if (!especialidade || !profissionalId || !data || !nome || !cpf) {
        alert('Preencha todos os campos');
        return;
    }

    try {
        const response = await fetch('http://localhost:3001/agendamentos', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ nome, cpf, especialidade, profissionalId, data })
        });
        const result = await response.json();
        if (response.ok) {
            alert(result.message);
            document.getElementById('form-agendamento').reset();
            carregarEspecialidades();
        } else {
            alert(result.error);
        }
    } catch (error) {
        console.error('Erro ao agendar:', error);
        alert('Erro ao agendar');
    }
}

async function pesquisarAgendamentos(event) {
    event.preventDefault();
    const cpf = document.getElementById('cpf-pesquisa').value;
    if (!cpf) {
        alert('Digite o CPF');
        return;
    }

    try {
        const response = await fetch(`http://localhost:3001/agendamentos/${cpf}`);
        const agendamentos = await response.json();
        exibirAgendamentos(agendamentos);
    } catch (error) {
        console.error('Erro ao pesquisar agendamentos:', error);
        alert('Erro ao pesquisar');
    }
}

function exibirAgendamentos(agendamentos) {
    const resultadosDiv = document.getElementById('resultados-pesquisa');
    resultadosDiv.innerHTML = '';
    if (agendamentos.length === 0) {
        resultadosDiv.innerHTML = '<p>Nenhum agendamento encontrado.</p>';
        return;
    }
    agendamentos.forEach(ag => {
        const div = document.createElement('div');
        div.className = 'agendamento';
        div.innerHTML = `
            <p><strong>Nome:</strong> ${ag.nome}</p>
            <p><strong>CPF:</strong> ${ag.cpf}</p>
            <p><strong>Especialidade:</strong> ${ag.especialidade}</p>
            <p><strong>Profissional:</strong> ${ag.profissionalNome}</p>
            <p><strong>Data:</strong> ${ag.data}</p>
            <button onclick="cancelarAgendamento(${ag.id})">Cancelar</button>
        `;
        resultadosDiv.appendChild(div);
    });
}

async function cancelarAgendamento(id) {
    if (!confirm('Deseja cancelar este agendamento?')) return;
    try {
        const response = await fetch(`http://localhost:3001/agendamentos/${id}`, {
            method: 'DELETE'
        });
        const result = await response.json();
        if (response.ok) {
            alert(result.message);
            document.getElementById('form-pesquisa').dispatchEvent(new Event('submit'));
        } else {
            alert(result.error);
        }
    } catch (error) {
        console.error('Erro ao cancelar agendamento:', error);
        alert('Erro ao cancelar');
    }
}