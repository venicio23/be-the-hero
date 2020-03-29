const express = require('express');

const OngController =  require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');

const routes = express.Router();

routes.post('/sessions',SessionController.create);

//Rota para listar todas as ONGS
routes.get('/ongs',OngController.index);
// Rota para crianção da ONG
routes.post('/ongs',OngController.create);

routes.get('/profile', ProfileController.index);

//Rota para listar todas os incidentes
routes.get('/incidents', IncidentController.index);
//Rota  para criar todos os incidentes
routes.post('/incidents', IncidentController.create);
//Rota  para delete um especefico incidentes
routes.delete('/incidents/:id', IncidentController.delete);


module.exports = routes;
