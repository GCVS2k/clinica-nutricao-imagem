# Clínica Nutrição e Imagem

Este projeto é uma aplicação web para a **Clínica Nutrição e Imagem**, composta por uma landing page estática, uma API para consulta de disponibilidade de profissionais, e uma aplicação de agendamento de consultas/exames. O objetivo é permitir que usuários visualizem serviços, consultem a disponibilidade de profissionais e agendem consultas de forma prática.

## Estrutura do Projeto

- **Landing Page** (`index.html`, `styles.css`, `images/`): Página inicial com informações sobre serviços, equipe, disponibilidade e formulário de contato.
- **API de Disponibilidade** (`api/`): API Node.js que consulta um arquivo JSON (`profissionais.json`) para listar especialidades e profissionais, com filtros por especialidade e nome.
- **Aplicação de Agendamento** (`agendamento/`):
  - **Frontend** (`agendamento/frontend/`): Interface para selecionar especialidade, profissional, data, e registrar agendamentos com nome e CPF.
  - **Backend** (`agendamento/backend/`): API Node.js que gerencia agendamentos, armazenados em `agendamentos.json`, com funcionalidades de pesquisa e cancelamento por CPF.

## Tecnologias Utilizadas

- **Frontend**: HTML, CSS, JavaScript
- **Backend**: Node.js, Express
- **Armazenamento**: Arquivos JSON (`profissionais.json`, `agendamentos.json`)
- **Versionamento**: Git, GitHub

## Pré-requisitos

- [Node.js](https://nodejs.org/) (versão LTS recomendada)
- Navegador web moderno (Chrome, Firefox, Edge)
- [Git](https://git-scm.com/) (para clonar o repositório)
- Um servidor HTTP local (ex.: Live Server no VSCode ou `http-server`)

## Como Configurar e Executar

### 1. Clonar o Repositório
```bash
git clone https://github.com/GCVS2k/clinica-nutricao-imagem.git
cd clinica-nutricao-imagem


2. **Personalizar o `README.md`**:
   - Substitua `SEU_USUARIO` pelo seu nome de usuário do GitHub.
   - Substitua `SEU_NOME` e `SEU_EMAIL` pelas suas informações de contato, ou remova a seção de contato, se preferir.
   - Adicione um arquivo `LICENSE` (ex.: MIT License) na raiz do projeto, se desejar:
     ```text
     MIT License

     Copyright (c) 2025 [SEU_NOME]

     Permission is hereby granted, free of charge, to any person obtaining a copy
     of this software and associated documentation files (the "Software"), to deal
     in the Software without restriction, including without limitation the rights
     to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
     copies of the Software, and to permit persons to whom the Software is
     furnished to do so, subject to the following conditions:

     The above copyright notice and this permission notice shall be included in all
     copies or substantial portions of the Software.

     THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
     IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
     FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
     AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
     LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
     OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
     SOFTWARE.
     ```

3. **Adicionar e commit o `README.md`**:
   - No terminal do VSCode:
     ```bash
     git add README.md
     git commit -m "Adiciona README.md com instruções do projeto"
     git push origin main
     ```

---

### Passo 5: Verificar o repositório no GitHub
1. **Acesse o repositório**:
   - Vá para `https://github.com/SEU_USUARIO/clinica-nutricao-imagem`.
   - Confirme que todos os arquivos estão presentes, incluindo:
     - `index.html`, `styles.css`, `images/`
     - `api/` (com `server.js`, `profissionais.json`, `package.json`)
     - `agendamento/` (com `frontend/` e `backend/`)
     - `README.md`

2. **Testar o `README.md`**:
   - O GitHub renderizará o `README.md` automaticamente na página inicial do repositório.
   - Verifique se as seções estão formatadas corretamente e se as instruções são claras.

3. **Testar a clonagem**:
   - Em outra pasta, clone o repositório para simular um usuário externo:
     ```bash
     git clone https://github.com/SEU_USUARIO/clinica-nutricao-imagem.git
     cd clinica-nutricao-imagem
     ```
   - Siga as instruções do `README.md` para configurar e executar:
     - Instale dependências em `api/` e `agendamento/backend/`.
     - Inicie os servidores.
     - Abra as páginas com Live Server ou `http-server`.
   - Se encontrar problemas, ajuste o `README.md` ou os arquivos do projeto.

---

### Passo 6: Dicas adicionais
1. **Organizar branches**:
   - Para futuras alterações, crie branches separadas:
     ```bash
     git checkout -b feature/nova-funcionalidade
     git push origin feature/nova-funcionalidade
     ```
   - Mescle as alterações na branch `main` via Pull Request no GitHub.

2. **Adicionar imagens reais**:
   - Substitua as imagens em `images/` por versões reais da clínica. Atualize o repositório:
     ```bash
     git add images/
     git commit -m "Atualiza imagens da clínica"
     git push origin main
     ```

3. **Melhorar o `README.md`**:
   - Adicione capturas de tela do projeto:
     ```markdown
     ## Screenshots
     ![Landing Page](screenshots/landing-page.png)
     ![Agendamento](screenshots/agendamento.png)
     ```
     - Crie uma pasta `screenshots/` e adicione as imagens.
   - Inclua badges do GitHub:
     ```markdown
     ![GitHub repo size](https://img.shields.io/github/repo-size/SEU_USUARIO/clinica-nutricao-imagem)
     ![GitHub last commit](https://img.shields.io/github/last-commit/SEU_USUARIO/clinica-nutricao-imagem)
     ```

4. **Hospedagem**:
   - **Frontend**: Hospede a landing page e a página de agendamento no Netlify ou GitHub Pages.
   - **Backend**: Hospede as APIs no Heroku ou Render. Atualize o `README.md` com as URLs públicas, se aplicável.

5. **Segurança**:
   - Evite incluir informações sensíveis (ex.: chaves de API, senhas) no repositório.
   - Certifique-se de que `agendamentos.json` não contém dados reais de usuários.

---

### Resultado
- O projeto foi incluído em um repositório público no GitHub, com todos os artefatos necessários (`index.html`, `styles.css`, `api/`, `agendamento/`, `images/`).
- Um arquivo `.gitignore` foi criado para excluir `node_modules`.
- Um `README.md` detalhado foi adicionado, explicando o projeto, como configurá-lo e executá-lo.
- O repositório está organizado e pronto para ser clonado e executado por outros usuários.

Se precisar de ajuda para:
- Criar o repositório no GitHub (caso tenha dúvidas com a interface).
- Ajustar o `README.md` (ex.: adicionar screenshots, mudar o texto).
- Configurar hospedagem (Netlify, Heroku).
- Resolver erros no Git/GitHub (ex.: problemas de autenticação).
...é só me avisar! Também posso fornecer o link do repositório, se quiser que eu revise algo específico após o upload.
