const express = require('express');
const ideasRouter = express.Router();
const db = require('./db');

ideasRouter.get('/', (req, res) => {
    const ideas = db.getAllFromDatabase('ideas');
    res.send(ideas);
});

ideasRouter.post('/', (req, res) => {
    const newIdea = db.addToDatabase('ideas', req.body);
    if (newIdea) {
        res.status(201).send(newIdea);
    } else {
        res.status(400).send();
    }
});

ideasRouter.get('/:ideaId', (req, res) => {
    const idea = db.getFromDatabaseById('ideas', req.params.ideaId);
    if (idea) {
        res.send(idea);
    } else {
        res.status(404).send();
    }
});

ideasRouter.put('/:ideaId', (req, res) => {
    const updatedIdea = db.updateInstanceInDatabase('ideas', req.body);
    if (updatedIdea) {
        res.send(updatedIdea);
    } else {
        res.status(400).send();
    }
});

ideasRouter.delete('/:ideaId', (req, res) => {
    const deleted = db.deleteFromDatabasebyId('ideas', req.params.ideaId);
    if (deleted) {
        res.status(204).send();
    } else {
        res.status(404).send();
    }
});

module.exports = ideasRouter;