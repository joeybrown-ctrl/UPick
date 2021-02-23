const jwt = require('jsonwebtoken');
const util = require('util');
const router = require('express').Router();
const db = require('../models');
const sgMail = require('@sendgrid/mail');

const signAsync = util.promisify(jwt.sign);

//
router.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body;
        // Find user
        const user = await db.User.scope('withPassword').findOne({ where: { email: email } });
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
        sgMail.setApiKey(process.env.SENDGRID_API_KEY);
        const msg = {
            to: req.body.email, // Change to your recipient
            from: 'u.pick.project@gmail.com', // Change to your verified sender
            subject: 'Welcome to U-Pick',
            text:
                'Thank you for signing up with U-Pick. Your account is now activated. U-Pick is an app designed to help indecisive people choose entertainment and dining options based on location. Once you are signed in, you can create a profile and start the pick process by inviting friends and choosing entertainment and/or dining.',
            html:
                '<h1><strong>Thank you for signing up with U-Pick. Your account is now activated.</strong></h1><p>U-Pick is an app designed to help indecisive people choose entertainment and dining options based on location. Once you are signed in, you can create a profile and start the pick process by inviting friends and choosing entertainment and/or dining.</p>',
        };
        await sgMail
            .send(msg);

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

