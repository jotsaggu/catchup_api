'use strict';

var User = require('../model/userModel.js');

exports.list_all_users = function(req, res) {
    User.getAllUser(function(err, user) {
  
      console.log('controller')
      if (err)
        res.send(err);
        console.log('user', user);
      res.send(user);
    });
  };