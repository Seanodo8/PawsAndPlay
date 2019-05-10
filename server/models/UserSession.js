const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
mongoose.promise = Promise;

const UserSchema = new mongoose.Schema({
    email:{ type: String, unique:true, required: true},
    password:{ type: String, unique:false, required: true}
})

UserSchema.methods.generateHash = function(password){
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
}

UserSchema.methods.validPassword = function(password){
    return bcrypt.compareSync(password, this.password);
}

UserSchema.pre('save', function (next) {
    if (!this.password) {
      console.log('models/user.js =======NO PASSWORD PROVIDED=======')
      next()
    } else {
      console.log('models/user.js hashPassword in pre save');
      this.password = this.generateHash(this.password)
      next()
    }
  })


module.exports = mongoose.model('User', UserSchema)