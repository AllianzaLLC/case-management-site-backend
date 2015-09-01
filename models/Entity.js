/**
 * Created by user on 8/31/15.
 */

var mongoose = require('mongoose');

var EntitySchema = new mongoose.Schema({
    name: String,
    address: String,
    zip: String,
    phoneNumber: String,
    fein: String
});

module.exports = EntitySchema;