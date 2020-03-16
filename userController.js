var userData=[
    {"name":"Shital","age":30,"city":"Pune","state":"Maharashtra"},
    {"name":"kiran","age":31,"city":"Pune","state":"Maharashtra"},
    {"name":"Advika","age":20,"city":"Pune","state":"Maharashtra"},
    {"name":"Arvika","age":18,"city":"Pune","state":"Maharashtra"},
    {"name":"Pratham","age":21,"city":"Pune","state":"Maharashtra"}
];
exports.displayusers=(req,res)=>{
    console.log("hi");  
    let list={name:req.query.name, 
        age:req.query.age, 
        city:req.query.city, 
        state:req.query.state}         
        console.log(list);   
    userData.push(list); 
    res.render('users',{arr:userData});
}
exports.deleteUser=(req,res)=>{
    userData.pop();
    res.render('users',{userData});   
}
exports.hello=(req,res)=>{
    res.render('hello');
}
exports.admin=(req,res)=>{
    res.render('admin');
}


