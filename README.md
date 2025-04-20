# Clínica Nutrição e Imagem

![GitHub repo size](https://img.shields.io/github/repo-size/GCVS2k/clinica-nutricao-imagem)
![GitHub last commit](https://img.shields.io/github/last-commit/GCVS2k/clinica-nutricao-imagem)
![License](https://img.shields.io/github/license/GCVS2k/clinica-nutricao-imagem)

Bem-vindo ao projeto **Clínica Nutrição e Imagem**, uma aplicação web que oferece uma landing page para promover serviços de saúde, uma API para consultar a disponibilidade de profissionais, e um sistema de agendamento de consultas e exames. O objetivo é proporcionar uma experiência prática para usuários visualizarem serviços, filtrarem profissionais por especialidade, e agendarem consultas com facilidade.

## Funcionalidades

- **Landing Page**: Interface estática com informações sobre serviços, equipe, e filtro de disponibilidade por especialidade ou nome do profissional.
- **Consulta de Disponibilidade**: API que lista especialidades e profissionais, com filtros dinâmicos.
- **Agendamento de Consultas**: Interface para selecionar especialidade, profissional, data/horário, e registrar agendamentos com nome e CPF. Inclui pesquisa e cancelamento por CPF.
- **Backend Robusto**: APIs RESTful para gerenciar dados de profissionais e agendamentos, armazenados em arquivos JSON.

## Tecnologias Utilizadas

- **Frontend**:
  - HTML5: Estrutura das páginas.
  - CSS3: Estilização responsiva e visual.
  - JavaScript (ES6): Lógica de interação e requisições às APIs.
- **Backend**:
  - Node.js: Ambiente de execução.
  - Express.js: Framework para APIs RESTful.
  - File System (fs): Leitura/escrita em arquivos JSON.
- **Armazenamento**:
  - JSON: Arquivos `profissionais.json` e `agendamentos.json` como banco de dados.
- **Ferramentas**:
  - Visual Studio Code: Desenvolvimento e depuração.
  - Git/GitHub: Controle de versão e hospedagem.
  - Live Server/http-server: Servidor local para o frontend.
  - Postman: Testes de API.
  - CORS: Configuração para requisições cross-origin.
- **Outros**:
  - Markdown: Documentação no `README.md`.
  - npm: Gerenciamento de dependências.

## Estrutura do Projeto

clinica-nutricao-imagem/
├── index.html              # Landing page
├── styles.css              # Estilos da landing page
├── images/                 # Imagens da clínica
├── api/
│   ├── server.js           # API de disponibilidade
│   ├── profissionais.json  # Dados dos profissionais
│   └── package.json        # Dependências da API
├── agendamento/
│   ├── frontend/
│   │   ├── index.html      # Página de agendamento
│   │   ├── styles.css      # Estilos do agendamento
│   │   └── script.js       # Lógica do frontend
│   ├── backend/
│   │   ├── server.js       # API de agendamento
│   │   ├── profissionais.json  # Dados dos profissionais
│   │   ├── agendamentos.json   # Dados dos agendamentos
│   │   └── package.json    # Dependências do backend
├── .gitignore              # Ignora node_modules
└── README.md               # Documentação

## Pré-requisitos

- **Node.js** (v16 ou superior, LTS recomendado): [Download](https://nodejs.org)
- **Navegador moderno** (Chrome, Firefox, Edge)
- **Git**: [Instalação](https://git-scm.com/downloads)
- **Live Server** (extensão do VSCode) ou **http-server** (`npm install -g http-server`)
- **Postman** (opcional, para testar APIs): [Download](https://www.postman.com/downloads/)

## Como Configurar e Executar

### 1. Clonar o Repositório
```bash
git clone https://github.com/GCVS2k/clinica-nutricao-imagem.git
cd clinica-nutricao-imagem

2. Instalar Dependências
Para a API de Disponibilidade:
bash

cd api
npm install

Para o Backend de Agendamento:
bash

cd agendamento/backend
npm install

3. Iniciar os Servidores
API de Disponibilidade (porta 3000):
bash

cd api
npm start

Acesse: http://localhost:3000/especialidades

Backend de Agendamento (porta 3001):
bash

cd agendamento/backend
npm start

Acesse: http://localhost:3001/especialidades

4. Abrir a Aplicação
Landing Page:
Abra index.html com Live Server (VSCode) ou:
bash

cd clinica-nutricao-imagem
http-server

Acesse: http://localhost:8080

Página de Agendamento:
Abra agendamento/frontend/index.html com Live Server ou:
Acesse: http://localhost:8080/agendamento/frontend/

5. Testar as APIs (com Postman)
API de Disponibilidade:
GET http://localhost:3000/especialidades: Lista especialidades.

GET http://localhost:3000/profissionais/especialidade/Nutrologia: Filtra profissionais.

Backend de Agendamento:
POST http://localhost:3001/agendamentos: Cria um agendamento (exemplo de corpo):
json

{
    "profissionalId": 2,
    "data": "2025-04-21 09:00",
    "nome": "João da Silva",
    "cpf": "123.456.789-00"
}

GET http://localhost:3001/agendamentos/123.456.789-00: Pesquisa agendamentos por CPF.

Screenshots
Landing Page

Agendamento

Landing Page

Agendamento

Contribuição
Faça um fork do repositório.

Crie um branch para sua feature: git checkout -b minha-feature.

Commit suas alterações: git commit -m "Adiciona minha feature".

Push para o branch: git push origin minha-feature.

Abra um Pull Request no GitHub.

Licença

Contato
Autor: Guilherme cally

GitHub: GCVS2k

Email: guilhermecally@hotmail.com

