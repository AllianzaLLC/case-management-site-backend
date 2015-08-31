 var mongoose = require('mongoose'); 

var emailSchema = new mongoose.Schema({
	name: String,
	body: String,
	company: String,
	email: String
	
}); 

var emailSchema = mongoose.model('Emails', emailSchema); 

module.exports = {
	Emails: emailSchema
}

