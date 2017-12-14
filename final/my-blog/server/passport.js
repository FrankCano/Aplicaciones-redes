// requiere el modelo de Passport-Local Mongoose conectado
var User = require('./models/user'),
	LocalStrategy = require('passport-local').Strategy;

module.exports = function(passport){
	// utilizar el metodo de autenticacion estatico en LocalStrategy
	passport.use(User.createStrategy());

	// utilizar la serialización estática y la deserialización del modelo para el soporte de la sesión
	passport.serializeUser(User.serializeUser());
	passport.deserializeUser(User.deserializeUser());
};
