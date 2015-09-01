var express = require('express'); 
var app = express(); 
var mongoose = require('mongoose'); 
mongoose.connect('mongodb://localhost/TCM'); 
var bodyParser = require('body-parser'); 
app.use(bodyParser.json()); // suports json encoded bodies
app.use(bodyParser.urlencoded({ extended: true})); // supports encoded bodies

var RefferalItem = require("./models/RefferalForm");
var User = require("./models/user").User;  
var Emails = require("./models/email").Emails; 

var nodemailer = require('nodemailer'); 
var transporter = nodemailer.createTransport({
	serivce: 'Gmail',
	auth: {
		user: '**********',
		pass: '**********'
	}
}); 

var db = mongoose.connection; 
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function(callback){
	console.log('connected to mongo'); 
}); 



app.use(function(req,res,next){


	//website you wish to allow to connect
	res.setHeader('Access-Control-Allow-Origin', 'http://localhost:63342');

	//request methods you wish to allow
	res.setHeader('Acces-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
	
	//REQUEST HEADERS YOU WISH TO ALLOW 
	res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With, content-type');
	
	//set to true if you need the website to include cookies in the request sent
	// to the api(e.g. in case you use sessions)
	res.setHeader('Access-Control-Allow-Credentials', true);

	// pas to next layer of middleware
	next();
}); 
  

app.get('/', function(req,res) {
	res.send('hello world!');

}); 


app.post('/email', function(req, res){

	console.log('Email function got called'); 	
var mailOptions = {
		from: 'ruvalcaba.mark@gmail.com', 
		to: 'ruvalcaba.mark@utexas.edu',
		subject: req.body.company + 'New Contact Attempt Texas Case Management',
		text: req.body.message 
	};

	transporter.sendMail(mailOptions, function(error,info){
		
		if(error){
		console.log(error); 
		} else {
			console.log('message sent' + info.response); 
		}
	}); 

	//Already sent the email, now save to mongodb database. 

	var newEmail = new Emails({
		name : req.body.from, 
		body: req.body.message,
		company: req.body.company,
		email: req.body.fromEmail 
	}); 	

	newEmail.save(function(err, newEmail){
		if(err) return console.error(err); 
		console.dir(newEmail); 
	}); 

}); 


app.post('/addUser', function(req, res){
	console.log('------------------------------------------------'); 
	//console.log(req.query.email); 
	
	console.dir(req); 
	var Uemail = req.body.email;
	var Upassword = req.body.password;
	var Uname = req.body.name; 
	
	var newUser  = new User({
		name : Uname,
		email: Uemail,
		password: Upassword	
	}); 
	newUser.save(function(err, newUser){
		if(err) return console.error(err);
		console.dir(newUser); 
	}); 
	

	res.send(Uemail + ' ' + Upassword + ' ' + Uname); 
	console.log('-----------------------------------------------------');

});

app.post('/verify', function( req, res) {
	console.log('-------------------------------------------------'); 
	console.log('Verifiying user...'); 
	var Uemail = req.body.email; 
	var Upassword = req.body.password; 
	
	User.findOne({email: Uemail}, function(err,foundUser){
	if(err) return console.error(err); 
	if(foundUser === null) return console.log("No user found");
	
	console.log('Found User..') ;
	console.dir(foundUser);
 	
	var returnedPassword = foundUser.password; 
	console.log('Returned Password: ' + returnedPassword);
	console.log('Typed Password: ' + Upassword); 
	
	if(Upassword === returnedPassword){
		console.log("Passwords match...Authenticated");	
	} else {
		console.log("Passwords do not match."); 
	}
		
	});
	console.log('--------------------------------------------------'); 
});


app.get('/users', function(req,res){
	User.find(function(err, users){
		res.send(users);
	});
	//	console.dir(req);   
}); 


var server = app.listen(8080,function(){
	var host = server.address().address; 
	var port = server.address().port; 

	console.log('Example app listening at http:://%s:%s', host, port); 
	
}); 
