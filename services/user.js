const User = require('../models/user');

class UserService {
    static async getUsers() {
        return await User.find();
    }
    static async getUserBYUsername(username) {
        return await await User.findOne({ username }).exec();
    }

}

module.exports = UserService;