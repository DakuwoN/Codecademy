const express = require('express');
// Create a router for minions
const minionsRouter = express.Router();
const db = require('./db');

// Define routes for minionsRouter
minionsRouter.get('/minions', (req, res) => {
    // Handle GET request for listing minions
    const minions = db.getAllFromDatabase('minions');
    res.send(minions);

});

minionsRouter.post('/', (req, res) => {
    // Handle POST request to add a new minion
    const newMinion = db.addToDatabase('minions', req.body);
    if (newMinion) {
        res.status(201).send(newMinion);
    } else {
        res.status(400).send();
    
    }
});

// More routes (PUT, DELETE, etc.) for minions can be added here
minionsRouter.get('/:minionId', (req, res) => {
    // Handle GET requests for a single minion
    const minion = db.getFromDatabaseById('minions', req.params.minionId);
    if (minion) {
        res.send(minion);
    } else {
        res.status(404).send();
    }
});

minionsRouter.put('/:minionId', (req, res) => {
    // Handle PUT requests for a single minion
    const updatedMinion = db.updateInstanceInDatabase('minions', req.body);
    if (updatedMinion) {
        res.send(updatedMinion);
    } else {
        res.status(400).send();
    }
});

minionsRouter.delete('/:minionId', (req, res) => {
    // Handle DELETE requests for a single minion
    const deleted = db.deleteFromDatabasebyId('minions', req.params.minionId);
    if (deleted) {
        res.status(204).send();
    } else {
        res.status(404).send();
    }
});

// Export the router
module.exports = minionsRouter;