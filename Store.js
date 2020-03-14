const mongoose=require('mongoose');
const slug=require('slugs');

// const MongoClient = require('mongodb').MongoClient;
// const url = "mongodb://localhost:27017/";

// MongoClient.connect(url, function(err, db) {
//   if (err) throw err;
//   var dbo = db.db("qliktagInterns");
//   dbo.createCollection("users", function(err, res) {
//  if (err) throw err;
//     console.log("Collection created!");
//     db.close();
//   });
// });
const userSchema=new mongoose.Schema({
    name:{
        type:String
    },
    slug:String,
    age:{
        type:Number
    },
    city:{
        type:String
    },
    state:{
        type:String
    }
});
userSchema.pre('save',function(next){
    if(!this.isModified('name')){
    // this.slug=slug(this.name);
    next();
    return ;
    }
    this.slug=slug(this.name);
    next();
})
module.exports=mongoose.model('Store', userSchema);