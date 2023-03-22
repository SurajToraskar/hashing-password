const express=require('express');
require('./config.js');
const app=express();
const bcrypt=require('bcrypt');
const model=require('./scheme.js');

app.use(express.json());
app.post('/',async (req,resp)=>{
    const salt=await bcrypt.genSalt();
    const hashedpassword=await bcrypt.hash(req.body.password,salt);
    const data=new model({
        "username":req.body.username,
        "password":hashedpassword

    })
    const result=await data.save();
    resp.send(result);
})
// app.post('/search',async (req,resp)=>{
//     const data=await model.find();
//     const result=await data.find(name=>data.username===req.body.name);
//     if(await bcrypt.compare(req.body.password,data.password)){
//         resp.send('Success');
//     }
//     else{
//         resp.send('Not Allowed');
//     }
// })




app.listen(7900);