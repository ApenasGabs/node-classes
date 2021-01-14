const { request, response } = require('express');
const express = require('express');

const teste = express();

teste.get('/projects', (request, response) => {
    return response.json([
        'projeto 1',
        'projeto 2'
    ]);
});

teste.post('/projects',(request, response) => {
    return response.json([
        'projeto 1',
        'projeto 2',
        'projeto 3'
    ]);
});
teste.put('/projects:id',(request, response) => {
    return response.json([
        'projeto 4',
        'projeto 2',
        'projeto 3'
    ]);
});
teste.listen(3333,() => {
    console.log('Ainda ta rodando 🥴');
});
