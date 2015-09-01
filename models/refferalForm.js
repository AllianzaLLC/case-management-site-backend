var mongoose = require('mongoose');
var employer = require('./Employer');
var employee = require('./Employee');
var carrier = require('./Carrier');
var occurance = require('./Occurance');
var other = require('./Other');


var RefferalSchema = new mongoose.Schema({
	employee: [employee],
	employer: [employer],
	carrier: [carrier],
	occurance: [occurance],
	other : [other]
});

module.exports = mongoose.model('RefferalItem', RefferalSchema);