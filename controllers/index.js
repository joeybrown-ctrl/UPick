const router = require('express').Router();

// Import our controllers
const noteRoutes = require('./notesController');
const userRoutes = require('./usersController');
const authRoutes = require('./authController');
const eventRoutes = require('./eventController');
const inviteRoutes = require('./inviteController');
const voteRoutes = require('./voteController');

// Hook up to the router
router.use('/api/notes', noteRoutes);
router.use('/api/users', userRoutes);
router.use('/api/auth', authRoutes);
router.use('/api/event', eventRoutes);
router.use('/api/invite', inviteRoutes);
router.use('/api/vote', voteRoutes);

// Export the router
module.exports = router;
