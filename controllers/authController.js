const jwt = require('jsonwebtoken');
const util = require('util');
const router = require('express').Router();
const db = require('../models');

const signAsync = util.promisify(jwt.sign);

//
router.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body;
        // Find user
        const user = await db.User.scope('withPassword').findOne({ where: {email:email }});
        if (!user) {
            res.status(400).send('User not found.');
        }
        const isGoodPassword = await user.validPassword(password);
        if (!isGoodPassword) {
            res.status(400).send('Invalid Password.');
        }
        // Create JWT token
        const token = await signAsync(
            { id: user.id, email: user.email },
            process.env.SECRET,
            {
                expiresIn: '24h',
                algorithm: 'HS256'
            }
        );
        // send token and user data back. Selecting only certain parts of the user
        res.json({
            token, user: {
                id: user.id,
                email: user.email
            }
        });
    } catch (err) {
        console.error(err);
        res.status(500).json(err);
    }
});

// Route for signing up a user.
// We create a user, tossing back an error fi it fails
router.post('/signup', async (req, res) => {
    try {
        const { email, password } = req.body;
        // Try to create a user
        const user = await db.User.create({
            email,
            password
        });
        if (!user) {
            res.status(400).send('Cannot create user.');
        }
        // Create JWT token
        const token = await signAsync(
            { id: user.id, email: user.email },
            process.env.SECRET,
            {
                expiresIn: '24h',
                algorithm: 'HS256'
            }
        );
        // send token and user data back. Selecting only certain parts of the user
        res.json({
            token, user: {
                id: user.id,
                email: user.email
            }
        });
    } catch (err) {
        console.error(err);
        res.status(500).json(err);
    }
});

module.exports = router;
