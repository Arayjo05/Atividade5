const express = require('express')
const app = express()
const alunos = require('./alunos.json') 
const centralizador = require('./rotas/centralizador')
app.get('/',(req,res) =>{
    res.send('Questão5') 
    })

app.listen(3114,()=>{
        console.log(' servidor na porta 3114')
    })


    app.get('/alunos/todos',(req,res) =>{
        let alunos = [
            {"nome": "Sidney", "turma": "sala 1" },
            {"nome": "Lucas", "turma": "sala 1"},
            {"nome": "Paiva", "turma": "sala 1"},
            {"nome": "Sergiano", "turma": "sala 1"}
        ]

        res.json(alunos) 
    })


    app.get('/moeda/:valor_real', centralizador.converter)