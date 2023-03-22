const express=require('express');
const bcrypt=require('bcrypt');
const {MongoClient}=require('mongodb');
const url='mongodb://127.0.0.1:27017';
const client=new MongoClient(url);
const app=express();

app.post('/',async (req,resp)=>{
    const result =await client.connect();
    const db =result.db('password');
    const collection= db.collection('passwordhashing');
    const data=await collection.find({}).toArray();
    resp.send(data);

    
})

app.listen(8900);