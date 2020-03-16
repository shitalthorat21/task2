const express = require('express');
const router = express.Router();
const app = express();
const pug=require('pug');
var path=require('path');
const port=8008;
const userController=require('./userController');
app.use(router);
app.set('view engine', 'pug'); 
app.set('views', path.join(__dirname, './views'));

router.get('/', userController.hello);
router.get('/users', userController.displayusers);
router.get('/users', userController.addUser);
router.post('/users', userController.addUser);
router.get('/admin', userController.admin);


const mongoose = require('mongoose');

require('dotenv').config({ path: 'variables.env' });


// mongoose.connect('mongodb://localhost:27017/qliktagInterns', { useNewUrlParser: true })
// .then((resp) => console.log('Success', resp))
// .catch((err) => console.log('Error' , err));

const MongoClient = require('mongodb').MongoClient;
MongoClient.connect('mongodb://localhost:27017/qliktagInterns', function(err, db) {
  if (err) throw err;
  const dbo = db.db("qliktagInterns");
  dbo.createCollection("users", function(err, res) {
    if (err) throw err;
    console.log("Collection created!");
    db.close();
  });
});

app.listen(port, () => {
      console.log("server listen on port:"+port);
    });



    
