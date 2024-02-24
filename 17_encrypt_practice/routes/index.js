const express = require('express');
const router = express.Router();
const controller = require('../controller/Cuser');
//

// GET /
router.get('/', controller.main);
// GET /login
router.get('/login', controller.get_login);
// GET /register
router.get('/register', controller.get_register);
// GET /logout
router.get('/logout', controller.logout);

// POST register
router.post('/register', controller.post_register);
// POST /profile
router.post('/profile', controller.post_profile);
// POST login
router.post('/login', controller.post_login);

module.exports = router;
