/*IMPORT DO PACOTE EXPRESS*/
const express = require('express');

/*INSTANCIA EXECUTAVEL DO EXPRESS*/
const app = express();

/*HABILITA A APLICAÇÃO A MANIPULAR JSON*/
app.use(express.json());

app.listen(3000, ()=>{ 
    console.log('SERVIDOR RODANDO EM - http://localhost:3000'); 
});