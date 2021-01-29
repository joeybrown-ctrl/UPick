const db = require('../models');
const router = require('express').Router();
const isAuthenticated = require('../utils/middleware').isAuthenticated;
/**
 * Vote - Read All
 */
router.get('/', isAuthenticated, function (req, res) {
    // we can pass in things in the query of a REST call!
    db.Vote.findAll(req.query)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
});

/**
 * Vote - Read One
 */
router.get('/:id', isAuthenticated, function (req, res) {
    db.Vote.findByPk(req.params.id)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
});

// * Note - Create
// * Notice how we are also taking in the User Id! Important!
// * We need the isAuthenticated middleware in the route to have a user in the request
// */
router.post('/', isAuthenticated, function (req, res) {
    db.Vote.create({
        UserId: req.user.id,
        ...req.body
    })
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
});

//create vote (POST route)
//add logic to determine whether or not event is completed (join votes to activities onto events)
//create algo to find out which activity user picked

module.exports = router;