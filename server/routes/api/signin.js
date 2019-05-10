const User = require ('../../models/User');
const UserSession = require('../../models/UserSession');


module.exports = (app) => {
app.post('api/account/signup', (req, res, next) => {
    const { body } = req;
    const {
        password
    } = body;
    let {
        email
    } = body;

        if(!email){
            return res.end({
                success: false,
                message: 'Email cannot be blank'
            });
        }
        if(!password){
            return res.end({
                success: false,
                message: 'Password cannot be blank'
            });
        }

        email = email.toLowercase();

        User.find({
            email:email
        }, (err, previousUsers) => {
            if(err) {
                return res.end({  
                    success: false,
                    message: 'Error : Server Error'
                });
            } else if(previousUsers.length > 0){
                return res.end({  
                    success: false,
                    message: 'Error: Account Already Exists'
                });

            }

            const newUser = new User();
            newUser.email = email;
            newUser.password = newUser.generateHash(password);
            newUser.save((err, user) => {
                if (err) {
                     return res.end({
                        success: false,
                        message: 'Error: Server Error'
                    })
                }
                return res.end({
                    success: true,
                    message: 'Signed up!'
                });
            });
        });
        
    });
app.post('api/account/signin', (req, res, next) => {
        const { body } = req;
        const {
            password
        } = body;
        let {
            email
        } = body;
        
        if(!email){
            return res.end({
                success: false,
                message: 'Email cannot be blank'
            });
        }
        if(!password){
            return res.end({
                success: false,
                message: 'Password cannot be blank'
            });
        }
        email = email.toLowercase();

        User.find({
            email: email
        }, (err, users) => {
            if (err) {
                return res.send({
                    success: false,
                    message: 'Error: Server Error'
                });
            }
            if (users.length !=1){
                return res.send({
                    success: false,
                    message: 'Error: Invalid'

            });
        }

        const user = users[0];
        if(!user.validPassword(password)){
            return res.send({
                success: false,
                message: 'Error: Invalid'
            });
        }

        const userSession = new UserSession();
        userSession.userId = user._id;
        userSession.save((err,doc) => {
            if (err) {
                return res.send({
                    success: false,
                    message: 'Error: Server Error'
                });
            }
            return res.send({
                success: true,
                message: 'Valid Sign in',
                token: doc._id
            });

        }); 
    })

    });
app.get('api/account/verify', (req, res, next) => {
    const { query } = req;
    const { token } = query;

    UserSession.find({
        _id: token,
        isDeleted: false
    }, (err , sessions) => {
        if (err){
            return res.send({
                success: false,
                message: 'Error: Server Error'
            });
        }
        if (sessions.length != 1){
            return res.send({
                success: false,
                message: 'Error: Invalid'
            });
        }else {
            return res.send({
                success: true,
                message: 'Success'
            });

        }
    
    });

});

app.get('api/account/logout', (req, res, next ) => {
    const { query } = req;
    const { token } = query;

    UserSession.findOneAndUpdate({
        _id: token,
        isDeleted: false
    },{
        $set:{
            isDeleted:true
        }
    }, null, (err , sessions) => {
        if (err){
            return res.send({
                success: false,
                message: 'Error: Server Error'
            });
        }
        if (sessions.length != 1){
            return res.send({
                success: false,
                message: 'Error: Invalid'
            });
        }else {
            return res.send({
                success: true,
                message: 'Success'
            });

        }
    
    });

});

    
};