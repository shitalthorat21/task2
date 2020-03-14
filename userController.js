const mongoose=require('mongoose');
const Store=mongoose.model('Store');

exports.hello=(req,res)=>{
    res.render('index');
}
exports.users=(req,res)=>{
    res.render('index');
}

exports.admin=(req,res)=>{
    res.render('index');
}

// exports.createUser=async(req,res)=>{
//     //res.json(req.body);
//     const user=new Store(req.body); 
//     console.log("Hiiii");
//     await user.save();
//     res.redirect(`/`);
// }