const mongoose = require('../db/connections')
const Schema = mongoose.Schema

const User = new Schema({
    userName: String,
    userEmail: String,
    password: "password",
    userLoggedIn: Boolean,
    bbqStyle: [],
    restaurants: [{
        type: Schema.Types.ObjectId,
        ref: 'Restaurant'
    }]
})

module.exports = mongoose.model('User', User)