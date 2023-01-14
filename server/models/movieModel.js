const  mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");
const movieSchema=mongoose.Schema({
    name:{
        type:String,
        required:true,
        unique: true,
        
    },
    img:{
        type:String,
        required:true
    },
    movietype:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
     },
     trailer:{
       type:String,
       required:true
     },
     releaseDate:{
        type:String,
        required:true
     }

})

movieSchema.plugin(uniqueValidator)

///DOCUMENT MIDDLEWARE  -- RUNS BEFORE .SAVE() AND .CREATE()
movieSchema.pre('save', function(){
    // console.log(this)
})

module.exports=mongoose.model('Movie',movieSchema);