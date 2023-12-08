
const dotenv = require('dotenv');
const exprees = require('express');
const { connectToMongoDB } = require('./connection');

const app = exprees();

dotenv.config();

app.get('/healthz', (req, res) => {
     
    res.send({
        message: "working fine",
        health: "ok",
        time: Date.now()
    })
})
app.listen(process.env.PORT, () => {

    connectToMongoDB();
    console.log("working on port ",process.env.PORT);
})