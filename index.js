const express = require('express');
const router = express.Router();
// require('./Store');
const userController=require('./userController');

router.get('/', (req,res)=>{
    console.log("hey");
    res.render('hello',);
})



router.get('/users', (req,res)=>{
    const arr=[
        {name:'Shital',age:30,city:'Pune',state:'Maharashtra'},
        {name:'Kiran',age:30,city:'Pune',state:'Maharashtra'},
        {name:'Advika',age:30,city:'Pune',state:'Maharashtra'},
        {name:'Arvika',age:30,city:'Pune',state:'Maharashtra'},
        {name:'Pratham',age:30,city:'Pune',state:'Maharashtra'},
    ];
    res.json(arr);
})

router.get('/admin', (req,res)=>{
    
    res.render('admin');
})


 module.exports = router;