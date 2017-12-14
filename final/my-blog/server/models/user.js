var mongoose = require('mongoose'),
    passportLocalMongoose = require('passport-local-mongoose');

var User = new mongoose.Schema({
	email: {
		type: String, 
		required: '{PATH} is required!'
	}
});

// Passport-Local-Mongoose agregara un nombre de usuario, 
// , 
// 

// configura uso de email para campo de usuario
User.plugin(passportLocalMongoose, { usernameField: 'email' });

module.exports = mongoose.model('User', User);