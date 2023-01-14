const User=require('../models/userModel')
const registerUser=async(req,res)=>{
 try{
    const newUser=await User.create({
        name: req.body.name,
        password: req.body.password,
        email: req.body.email,
        // passwordConfirmation:req.body.passwordConfirmation
    })
    res.redirect('/login')
 }catch(err){
    res.status(404).send(err)
 }
}

module.exports={registerUser}