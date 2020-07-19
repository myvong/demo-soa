const UserService = require('../services/user');

const getUsers = async (req, res) => {
    const users = await UserService.getUsers();
    // res.status(200).send(users);
    res.render('users', {users});
}

const getUserByUsername = async(req, res) => {
    const username = req.params.username;
    const user = await UserService.getUserBYUsername(username);
    if (user)
        // res.status(200).send(user);
        res.render('user', { user });
    else
        res.status(400).send('User not found');
}

module.exports = {getUsers, getUserByUsername};
