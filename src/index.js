const { request, response } = require('express');
const express = require('express');
const { uuid } = require ('uuidv4')

const teste = express();

teste.use(express.json());


const projects = [];


teste.get('/projects', (request, response) => {
    // const { title, owner } = request.query;
    // console.log(owner);
    // console.log(title);
    return response.json(projects);
});

teste.post('/projects',(request, response) => {
    const {title, owner} = request.body;

    const project = { id: uuid(), title, owner };

    projects.push(project);
    console.log(project);
    return response.json(project);
});
teste.put('/projects/:id',(request, response) => {
    const {id} = request.params
    console.log(id);
    return response.json([
        'projeto 4',
        'projeto 2',
        'projeto 3',
    ]);
});
teste.delete('/projects/:id',(request, response) => {
    return response.json([
        'projeto 2',
        'projeto 3',
    ]);
});
teste.listen(3333,() => {
    console.log('Ainda ta rodando 🥴');
});
