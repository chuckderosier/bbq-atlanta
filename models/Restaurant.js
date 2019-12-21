const mongoose = require('../db/connections')
const Schema = mongoose.Schema

const Restaurant = new Schema({
    restaurantName: String,
    restaurantRating: Number,
    restaurantSauce: [],
    restaurantLocation: String,
    restaurantPhone: String,
    restaurantHours: String,
    restaurantMain: [{
        type: Schema.Types.ObjectId,
        ref: 'Main'
    }],
    restaurantSide: [{
        type: Schema.Types.ObjectId,
        ref: 'Side'
    }],
    restaurantDessert: [{
        type: Schema.Types.ObjectId,
        ref: 'Dessert'
    }]
})

module.export = mongoose.model("Restaurant", Restaurant)