let userData=[
    {"name":"Shital","age":30,"city":"Pune","state":"Maharashtra"},
    {"name":"kiran","age":31,"city":"Pune","state":"Maharashtra"},
    {"name":"Advika","age":20,"city":"Pune","state":"Maharashtra"},
    {"name":"Arvika","age":18,"city":"Pune","state":"Maharashtra"},
    {"name":"Pratham","age":21,"city":"Pune","state":"Maharashtra"}
];
exports.displayusers=(req,res)=>{
    
    res.render('users',{arr:userData});
}
exports.addUser=(req,res)=>{
    res.json('users',req.body);
}

exports.hello=(req,res)=>{
    res.render('hello');
}
exports.admin=(req,res)=>{
    res.render('admin');
}


