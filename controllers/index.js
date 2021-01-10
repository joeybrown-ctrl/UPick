const router = require('express').Router();

// Import our controllers
const noteRoutes = require('./notesController');
const userRoutes = require('./usersController');
const authRoutes = require('./authController');

// Hook up to the router
router.use('/api/notes', noteRoutes);
router.use('/api/users', userRoutes);
router.use('/api/auth', authRoutes);

// Export the router
module.exports = router;
