var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
router.use(bodyParser.urlencoded({extended:true}));
var User = require.('./user');

module.exports = router;

//creates a new user

router.post('/',function(req,res){
	user.create({
		name:req.body.name,
		email:req.body.email,
		password:req.body.password
	},
	function(err,user){
		if(err) return res.status(500).send("There was a problem adding the information to the database.");
			res.status(200).send(user);
	});
	
});

//Return all users in the databse:

router.get('/',function (req,res){

	user.find({},function(err,users){
		if(err) return res.status(500).send("There was a problem finding the users.");
		res.status(200).send(users);
	});
});

module.exports = router;