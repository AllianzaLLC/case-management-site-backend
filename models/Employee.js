/**
 * Created by user on 8/31/15.
 */
var mongoose = require('mongoose');
var Entity = require('./Entity');

var EmployeeSchema = new mongoose.Schema({
   entity: [Entity],
    ssn: String,
    sex: String,
    email: String,
    dob: String,
    dateHire: String,
    maritalStatus: String,
    stateOfHire: String,
    rate:String,
    per: String,
    occupation: String,
    employementStatus: String,
    numDependents: String,
    fullPayDay:Boolean,
    salaryContinue: Boolean,
    daysWorkedPerWeek: String
});

module.exports = EmployeeSchema;