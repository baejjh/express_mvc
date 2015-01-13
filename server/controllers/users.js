var mongoose = require('mongoose');
var User = mongoose.model('User'); 

module.exports = {
	index: function(req, res){
		User.find(function(err, tasks){
			if(err){
				return console.error(err)
			}
			res.render('users/index', {title: 'Welcome Page', my_tasks: tasks });
		})
	},
	create: function(req, res){
		var a = new User(req.body);
		console.log(a);
		a.save(function(err){
			if(err){
				res.send(JSON.stringify(err));
			}
			else{
				res.send('success');
				res.redirect('/');
			}
		});
	},
	destroy: function(req, res){
		var task = req.body.id;
		console.log(req.body);
		User.remove({ _id: task }, function(err){
			if(err){
				return console.error(err)
			}
			res.redirect('/');
		})
	}


	////not sure what this does but it was on the platform and i might refer to it later!//////////
	// index_json: function(req,res){
	// 	User.find({}, function(err, results){
	// 		res.send(JSON.stringify(results));
	// 	});
	// },
	// show: function(req, res){
	// 	res.render('./../server/views/users/show', {title: 'Welcome Page'});
	// },
	// edit: function(req, res){
	// 	res.render('./../server/views/users/edit', {title: 'Welcome Page'});
	// }
}