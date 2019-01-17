var mongoose = require('mongoose');

var HotelSchema =new mongoose.Schema({
    _id: String,
    name: String,
    country: String,
    city: String,
    addresss: String,
    locality: String, //Shot Address Of the Restaurant
    localityVerboseLong: String, // Address of the Restaurant
    longitude: String,
    latitude: String,
    cusine: Array,
    averageCostOfTwo: Number,
    currency: String,
    hasTableBooking: Boolean,
    hasOnlineDelivery: Boolean,
    isDeliveringNow: Boolean,
    price: Number, //rangeCategorized price between 1 -4
    aggregateRating: Number,
    ratingColor: String,
    ratingText: String,
    noOfVotes: Number,
    email: String
},{timestamps:true, strict: true});

HotelSchema.index({"_id":1,"name":1});

mongoose.model('Hotels',HotelSchema,'Hotels').createIndexes();