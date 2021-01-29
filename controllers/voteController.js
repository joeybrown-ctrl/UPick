const db = require('../models');
const router = require('express').Router();
const isAuthenticated = require('../utils/middleware').isAuthenticated;
/**
 * Vote - Read All
 */
router.get('/', isAuthenticated, function(req, res) {
    // we can pass in things in the query of a REST call!
    db.Vote.findAll(req.query)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
});

/**
 * Vote - Read One
 */
router.get('/:id', isAuthenticated, function(req, res) {
    db.Vote.findByPk(req.params.id)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
});

//create vote (POST route)
//add logic to determine whether or not event is completed (join votes to activities onto events)

//create algo to find out which activity user picked

router.post('/', isAuthenticated, function(req, res) {
    //note to FE, make sure you are calling Status and ActivityID
    // axios.post('/api/vote', {status: someStatus, ActivityID: someActivityID})

    db.Vote.create({
        UserId: req.user.id,
        ...req.body
    })
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
});


module.exports = router;