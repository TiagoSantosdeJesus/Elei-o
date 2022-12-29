const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const porta = 8080;

// array de livros que vamos utilizar como se fosse o banco de dados
let livros = [
    {Nome: 'teste',
    Autor: 'teste',
    ISBN:'teste'}
];

app.use(cors());

//configurando o body parse para que o body das requisições seja interpretado
app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());


app.get('/books', (req, res) => {
    res.status(200).send(livros)
});

app.post('/books', (req,res) => {
    const {livro} = req.body;

    // printando o livro que foi inserido
    console.log(livro)

    // add no array de livros
    livros.push(livro)

    res.status(201).send("Livro inserido com sucesso");
});

app.put('/books/:index', (req,res) => {
    const {index} = req.params;
    const {livro} = req.body;

    livros[index] = livro;
    res.status(200).send("Atualizado com sucesso");
});

app.delete('/books/:index', (req, res) => {
    const {index} = req.params;
    livros.splice(index, 1);
    res.status(200).send("Livro excluído com sucesso");
});


app.listen(porta, () =>{
    console.log("Servidor escutando na porta 8080")
});