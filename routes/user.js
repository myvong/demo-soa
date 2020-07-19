const router = require('express').Router();
const {getUsers, getUserByUsername} = require('../controllers/user.controller');

router.get('/users', getUsers);
router.get('/users/:username', getUserByUsername); //find user by username

module.exports = router;