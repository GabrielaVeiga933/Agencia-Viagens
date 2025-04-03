const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json())


app.use(express.static('public'));
 
   const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root', 
    password: 'root',
    database: 'agencia',
    port: 3306
});
 
connection.connect((err) => {
    if (err) {
        console.error('Erro ao conectar ao banco de dados:', err);
        return
    } 
     console.log('Conectado ao banco de dados!');
});


app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})
 
app.post('/viagens', (req, res) => {
    const { destino, data_viagem, preco, vagas } = req.body;
    const sql = 'INSERT INTO viagens (destino, data_viagem, preco, vagas) VALUES (?, ?, ?, ?)';
    connection.query(sql, [destino, data_viagem, preco, vagas], (err, result) => {
        if (err) {
            console.error('Erro ao cadastrar viagem.', error);
            return;
        }
    });
});
 
app.post('/Cadastrar',function(req,res){
    const destino = req.body.destino;
    const data_viagem = req.body.data_viagem;
    const preco = req.body.preco;
    const vagas = req.body.vagas;

    const values = [destino, data_viagem, preco, vagas];
    const insert = "INSERT INTO viagens(destino, data_viagem, preco, vagas) VALUES(?,?,?,?)"
    connection.query(insert,values, function(err,result){
        if(!err){
            console.log("dados inseridos com sucesso.");
        }else{
    console.log("não foi possivel inserir os dados", err);
    res.send("erro!")
        }
    })
    });


app.get("/visualizar", function(req, res){
    const visualizar = "SELECT * FROM viagens";
 
    connection.query(visualizar, function(err, rows){
        if (!err) {
            console.log("Viagem Cadastrada Com Sucesso!");
            res.send(`
              <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    
                    <head>
                        <title> Cadastro de Viagem </title>
                    </head>
                    <body>
                    <style>
                    body {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
    background-color: #ddd;
    text-align: center;
}

.container {
    width: 80%;
    margin: auto;
    background: white;
    padding: 0px;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    margin-top: 20px;
}

h1 {
    color: #034441;
}

table {
    width: 100%;
    border-collapse: collapse;
    margin-top: 20px;
}

table, th, td {
    border: 1px solid #ddd;
    padding: 10px;
    text-align: center;
}

th {
    background-color: #034441;
    color: white;
}

td {
    background-color: #f9f9f9;
}

button {
    background-color: #006159;
    color: white;
    border: none;
    padding: 10px 20px;
    cursor: pointer;
    font-size: 16px;
    margin-top: 20px;
    border-radius: 5px;
}

button:hover {
    background-color: #006159;
     transition: background-color 0.3s, transform 0.2s;
}
      button:hover {
    background-color: #008064;
    transform: scale(1.05);
</style>
  <main class="container">
                        <h1> Cadastro de Viagem </h1>
                        
                        <table>
                              <thead>
                                    <tr>
                                        <th>ID</th>
                                        <th>Destino</th>
                                        <th>Data</th>
                                        <th>Preço</th>
                                        <th>Vagas</th>
                                    </tr>
                                </thead>
                                <tbody id="listaViagens">
                    
                                </tbody>
                            ${rows.map(row => `
                                <tr>
                                    <td> ${row.id} </td>
                                    <td> ${row.destino} </td>
                                    <td> ${row.data_viagem} </td>
                                    <td> ${row.preco} </td>
                                    <td> ${row.vagas} </td>
                                </tr>
                                `).join('')}
                        </table>
                        <a href="/"> <button> Voltar </button> </a>

                        </main>  
                    </body>
                </html>
                `);
 
        } else {
            console.log("Erro ao cadastrar viagem!", err);
            res.send("Erro!")
        }
    })
    })


app.listen(3000, () => {
    console.log('Servidor rodando na porta http://localhost:3000');
});


 