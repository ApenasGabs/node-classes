const { request, response } = require('express');
const express = require('express');
const { uuid } = require ('uuidv4')

const teste = express();

teste.use(express.json());


const projects = [];

function logRequests(request, response, next){
    const{ method, url} = request;
    const logLabel = `[${method.toUpperCase()}] ${url}`;

    console.log(logLabel);
    

    next();
    console.timeEnd(logLabel);
}
teste.use(logRequests);

teste.get('/projects', (request, response) => {
    const { title} = request.query;

    const results = title 
        ? projects.filter(project => project.title.includes(title))
        : projects;

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
    const {title, owner} = request.body;

    const projectIndex = projects.findIndex(project => project.id === id);
    if (projectIndex < 0){
        return response.status(400).json({error: 'Project not found'})
    };
    const project = {
        id,
        title,
        owner,

    };
    projects[projectIndex] = project;

    console.log(id);
    return response.json(project);



});

teste.delete('/projects/:id',(request, response) => {
    const { id } = request.params;

    const projectIndex = projects.findIndex(project => project.id === id);
    if (projectIndex < 0){
        return response.status(400).json({error: 'Project not found'})
    };

    projects.splice(projectIndex, 1);
    
    return response.status(204).send();
});

teste.listen(3333,() => {
    console.log('Ainda ta rodando 🥴');
});
