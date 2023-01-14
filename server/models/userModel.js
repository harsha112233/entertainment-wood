const mongoose=require('mongoose');
const uniqueValidator = require("mongoose-unique-validator");
const bcrypt=require('bcrypt');
const userSchema=mongoose.Schema({
    name:{
        type:String,
        required:true,
        trim:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true,
    },
    // passwordConfirmation:{
    //     type:String,
    //     required:true
    // }
})

userSchema.pre('save', function(next) {
    if(this.isModified('password') || this.isNew) {
        bcrypt.hash(this.password, 10, (err, hash) => {
            if(err) {
                return next(err);
            }
            this.password = hash;
      
            next();
        });
    } else {
        return next();
    }
});

userSchema.plugin(uniqueValidator)
module.exports=mongoose.model('User',userSchema);