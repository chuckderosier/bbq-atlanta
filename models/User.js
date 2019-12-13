const mongoose = require('../db/connections')
const Schema = mongoose.Schema

const User = new Schema({
    userName: String,
    userEmail: String,
    password: "password",
    bbqStyle: [],
    restaurants: [{
        type: Schema.Types.ObjectId,
        ref: 'Restaurants'
    }]
})

module.exports = mongoose.model('User', User)