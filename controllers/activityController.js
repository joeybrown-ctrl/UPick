const router = require('express').Router();
const db = require('../models');
const isAuthenticated = require('../utils/middleware').isAuthenticated;

router.get('/:id', isAuthenticated, (req, res) => {
    // eslint-disable-next-line no-unused-vars
    const { id: eventId } = req.params;
    db.Activity.findAll({
        where: { EventId: eventId },
        include: {
            model: db.Vote,
            include: db.User
        }
    }).then(data => {
        res.json(data);
    }).catch(err => res.json(err));
});

module.exports = router;

// to do: create redirect from setPick to UPicked, and find a way to render the data in the UPickedCard component