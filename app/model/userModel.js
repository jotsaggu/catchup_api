'user strict';
var sql = require('../../db.js');

var User = function(user){
    this.first_name     = user.first_name;
    this.last_name      = task.last_name;
    this.email          = task.email;
    this.password       = task.password;
    this.country        = task.country;
    this.address        = task.address;
    this.phone          = task.phone;
    this.gender         = task.gender;
    this.dob            = task.dob;
    this.profile_picture = task.profile_picture;
    this.privacy_type   = task.privacy_type;
    this.device_type    = task.device_type;
    this.device_id      = task.device_id;
    this.login_token    = task.login_token;
    this.reset_token    = task.reset_token;
    this.reset_otp      = task.reset_otp;
    this.status         = task.status;
    this.notification   = task.notification;
    this.updated_at     = new Date();
    this.created_at     = new Date();
};

User.getAllUser = function getAllUser(result) {
    sql.query("Select * from users", function (err, res) {

            if(err) {
                console.log("error: ", err);
                result(null, err);
            }
            else{
              console.log('tasks : ', res);  

             result(null, res);
            }
        });   
};

module.exports= User;