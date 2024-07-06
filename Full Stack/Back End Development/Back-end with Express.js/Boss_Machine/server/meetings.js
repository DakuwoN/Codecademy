const express = require('express');
const meetingsRouter = express.Router();
const db = require('./db');

meetingsRouter.get('/', (req, res) => {
    const meetings = db.getAllFromDatabase('meetings');
    res.send(meetings);
});

meetingsRouter.post('/', (req, res) => {
    const newMeeting = db.createMeeting();
    if (newMeeting) {
        res.status(201).send(newMeeting);
    } else {
        res.status(400).send();
    }
});

meetingsRouter.delete('/', (req, res) => {
    const deleted = db.deleteAllFromDatabase('meetings');
    if (deleted) {
        res.status(204).send();
    } else {
        res.status(404).send();
    }
});

module.exports = meetingsRouter;