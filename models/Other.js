/**
 * Created by user on 9/1/15.
 */
var mongoose = require('mongoose');
var Entity = require('./Entity');

var OtherSchema = new mongoose.Schema({
    Witness: [Entity],
    Preparer: [Entity],
    datePrepared: String,
    dateAdNotified: String
});

module.exports = OtherSchema;