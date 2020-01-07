const mongoose = require('./connections')
const User = require('../models/User')
const Restaurant = require('../models/Restaurant')
const Main = require('../models/Main')
const Side = require('../models/Side')
const Dessert = require('../models/Dessert')

const chuckD = new User({
    userEmail: "chuck.derosier2018@gmail.com",
    password: "password",
    bbqStyle: ["tbd"],
    restaurants: ["Fat Matts"]
})

const fatMatts = new Restaurant({
    restaurantName: "Fat Matts",
    restaurantRating: 5,
    restaurantSauce: ["Kansas"],
    restaurantLocation: "Memorial Drive",
    restaurantPhone: "404-123-4567",
    restaurantHours: "tbd",
    restaurantMain: ["Pulled Pork", "Spare Ribs"],
    restaurantSide: ["Fried Okra", "Collard Greens"],
    restaurantDessert: ["Banana Pudding"]
})