const functions = require('firebase-functions');
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")
('sk_test_51Hb9mXIg4pmrRoyPX7WtllrQ9ViUikW40nsXdSdJ3QQmtMRHqsupQ9HB2qtGGpC2THVOBtBY1PLuVNbt7xjzWSef008JVJPZVm');
//Api
//App config 
const app =express();
//MiddleWare
app.use(cors({origin:true}))
app.use(express.json())
//APi Routes
app.get('/',(req,resp)=>resp.status(200).send('Hello World'))
app.post('/payments/create',async(req,resp)=>{
    const total=req.query.total;
    console.log("Payments Req recieved for this ammount",total);
    const paymentIntent=await stripe.paymentIntents.create({
        amount:total,//SubUnits of currency 
        currency:"INR",
        
    })
    resp.status(201).send({
        clientSecret:paymentIntent.client_secret
    })
})
//Listen commands
exports.api=functions.https.onRequest(app);

//http://localhost:5001/clone-e2127/us-central1/api