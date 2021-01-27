const db = require('../models');
const router = require('express').Router();
const activityGeneration = require('../services/activityGeneration')
const isAuthenticated = require('../utils/middleware').isAuthenticated;


/**
 * Event - Read All
 */
router.get('/', isAuthenticated, function (req, res) {
    // we can pass in things in the query of a REST call!
    db.Event.findAll(req.query)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
});

/**
 * Event - Read One
 */
router.get('/:id', isAuthenticated, function (req, res) {
    db.Event.findByPk(req.params.id)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
});

/**
 * Event - Create
 * Notice how we are also taking in the User Id! Important!
 * We need the isAuthenticated middleware in the route to have a user in the request
 */

router.post('/', isAuthenticated, async function (req, res) {

    try {

        const result = await db.sequelize.transaction(async (t) => {

            const event = await db.Event.create({
                OwnerId: req.user.id,
                ...req.body
            }, { transaction: t });
            if(req.body.inviteEmails){
                await Promise.all(req.body.inviteEmails.map((inviteeEmail) => {
                    return db.Invite.create({
                        EventId: event.id,
                        inviteeEmail: inviteeEmail
                    }, { transaction: t });
                }));
            } else {
                throw new Error('Invite emails missing from request body');
            }

            const activities = await activityGeneration(event);

            return event;

        });

        res.json(result);

    } catch (error) {

        res.status(500).send(error);
        console.log(error);
        // If the execution reaches this line, an error occurred.
        // The transaction has already been rolled back automatically by Sequelize!

    }
});

module.exports = router;


//This is for Controllers
//endpoint = "/api/event" which is a POST request. SO: POST /api/event
//data structure for event creation = fields of model (name(STRING), lat + long(DECIMAL), activityType(TEXT), entertainmentType(TEXT), pricePoint(TEXT), cuisine(TEXT)). DONE.

//create invites: in the body we'll add an array of user IDs and create event invites from those IDs NOTE: add validation so we don't end up inviting ourselves
//map the inviteEmails array to an array of invite create promises. We HAVE an array of promises and want to wait for them all to be done. We will wrap them in promise.all. DONE.

//we will need controllers for invite and vote models (simple GET routes). DONE.

//generating cards from an array. Map the array to requests. We'll set up a registry containing multiple activity types mapping to multiple providers. We'll go one by one through the activity types and pick a random provider to the activity types. NEARLY DONE.

//Either shelf movie idea as a nice-to-have, and just stick with food (Zomato). Or go with Fandango, rapidApi for Netflix, and Zomato -- pushing our APIs up to three. FIGURED OUT.

//TODOS

//set up activity generation: call different external APIs based off activityType. There can be one or more providers per activityType (provider is Zomato, etc). We can have multiple activity types with multiple providers.

//Add providers to registry.js

//Then we'll need accepting or rejecting an invite.

//extend validation on model later on each column, refining the validation. Post-MVP.