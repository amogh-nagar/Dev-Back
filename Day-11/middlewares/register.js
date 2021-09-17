const {emailvalidate,passwordvalidate} =require('../utils/emailvalidate')
const registercheck=(req,res,next)=>{
    const {email,password,confirmpassword}=req.body;
    console.log('Validating...');
}