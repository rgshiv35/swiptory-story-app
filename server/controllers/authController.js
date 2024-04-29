const User=require('../models/user')

const test=(req,res)=>{
    res.json("test is working")
}

const registerUser=async(req,res)=>{
    try {
        const{username,password}=req.body
        //check for password
        if(!password||password.length<6){
            return res.json({
                error:'Password is required and should be of atleast 6 characters'
            })
        }
        //check for username if exist in database or not
        const exist = await User.findOne({email});
        if(exist){
            return res.json({
                error:'Username is already in use'
            })
        }
        //creating user
        const user=await User.create({
            username,password
        })
    } catch (error) {
        console.log(error)
    }
}


module.exports={
    test,
    registerUser
}