const express=require('express');
const app=express();
const urlRoute=require('./routes/url')
const {connectDB}=require('./connect')
app.use(express.urlencoded({extended:false}));
app.use(express.json());
connectDB('mongodb://127.0.0.1:27017/url-shortener')
.then(()=>{ console.log('MongoDB Connected ')}).catch((err)=>{console.error(err)});
app.use('/url',urlRoute);


app.listen(3000,()=>{
    console.log(`Server running on http://localhost:3000/`)
})

