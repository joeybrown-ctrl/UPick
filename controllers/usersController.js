const db = require('../models');
const router = require('express').Router();
const isAuthenticated = require('../utils/middleware').isAuthenticated;

/**
 * User Read - All
 */
router.get('/', isAuthenticated, function(req, res) {
    db.User.findAll(req.query)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
});

/**
 * User Read - One
 */
router.get('/:id', isAuthenticated, function(req, res) {
    db.User.findByPk(req.params.id)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
});

//GET route api/user/invites
//will need to change this depending on the object that is returned
router.get('/invites/:id', isAuthenticated, function(req, res) {
    db.Invite.findByPk(req.params.id, {
        include: db.Event
    }).then(dbInvites => {
        db.Event.findByPk(dbInvites.Event.id, {
            include: db.User
        }).then(dbModel => {
            res.json(dbModel);
        }).catch(err => res.status(422).json(err));
    }).catch(err => res.status(422).json(err));
});

/**
 * User - Create
 * Notice how we are using the 'withPassword' scope.
 * This allows for us to modify a user's password, as defined in the User model
 */
router.post('/', isAuthenticated, function(req, res) {
    db.User.scope('withPassword')
        .create(req.body)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
});

/**
 * User - Update
 */
router.put('/:id', isAuthenticated, function(req, res) {
    db.User.update(req.body, { where: { id: req.params.id }})
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
});

/**
 * User - Delete
 */
router.delete('/:id', isAuthenticated, function(req, res) {
    db.User.destroy({ where: { id: req.params.id }})
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
});

module.exports = router;
