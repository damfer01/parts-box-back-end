
const rotas = require('./Routes');
const Cadastro = require('./Schema/UsuarioSchema')

const cors = require('cors');
const express = require('express');

const app = express();
const server = require('http').Server(app);


//**TUDO SOBRE O  MONGO  */
app.use(cors());
app.use(express.json());





const mongoose = require('mongoose');
const body = require('body-parser')
mongoose.connect("mongodb+srv://kaua:283186@cluster0.9m3dc2c.mongodb.net/register_box?retryWrites=true&w=majority");

mongoose.connection
    .once('open', () => console.log('ate agora deu certo !!!'))
    .on('error', (error) => {
        console.log('error:', error);
    });
     
   
    

    app.use(body.json());

    
    app.use(rotas);


    // PORTA DE ENTRADA||SAIDA
    server.listen(process.env.PORT || 3333, () => {
        console.log('O servidor está rodando na porta');
    });

