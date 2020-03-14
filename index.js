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

router.get('/users', userController.displayusers);

app.listen(port, () => {
      console.log("server listen on port:"+port);
    });
