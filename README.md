 README - Infinity Travel

Descrição:
Infinity Travel é uma aplicação web para gestão de viagens, permitindo o cadastro e visualização de viagens disponíveis. Desenvolvido utilizando Node.js com Express para o backend e MySQL como banco de dados.

Requisitos:
- Node.js
- MySQL

Instalação:
1. Clone este repositório:
   ```bash
   git clone https://github.com/seuusuario/infinity-travel.git
   ```
2. Acesse a pasta do projeto:
   ```bash
   cd infinity-travel
   ```
3. Instale as dependências:
   ```bash
   npm install
   ```

Configuração do Banco de Dados:
1. Crie o banco de dados e a tabela executando os comandos SQL abaixo no MySQL:
   ```sql
   CREATE DATABASE agencia;
   USE agencia;

   CREATE TABLE viagens (
       id INT AUTO_INCREMENT PRIMARY KEY,
       destino VARCHAR(255) NOT NULL,
       data_viagem DATE NOT NULL,
       preco DECIMAL(10,2) NOT NULL,
       vagas INT NOT NULL
   );
   ```
2. Altere as credenciais do banco de dados no arquivo `index.js`, caso necessário:
   ```js
   const connection = mysql.createConnection({
       host: 'localhost',
       user: 'root',
       password: 'root',
       database: 'agencia',
       port: 3306
   });
   ```

Execução do Servidor:
1. Inicie o servidor:
   ```bash
   node index.js
   ```
2. O servidor estará rodando em:
   ```
   http://localhost:3000
   ```

Funcionalidades:
- **Cadastrar Viagem**: Permite adicionar novas viagens ao banco de dados.
- **Visualizar Viagens**: Exibe uma tabela com todas as viagens cadastradas.

Estrutura do Projeto:
```
/infinity-travel
│── public/          # Arquivos estáticos (CSS, JS, imagens)
│── index.js        # Servidor Node.js com Express
│── index.html      # Interface principal
│── package.json    # Dependências do projeto
```

Tecnologias Utilizadas:
- Node.js
- Express
- MySQL
- HTML5/CSS3

Melhorias Futuras:
- Implementação de autenticação de usuários
- Melhorias na interface do usuário
- Implementação de edição e remoção de viagens

Autor, 
Desenvolvido por Gabriela.

