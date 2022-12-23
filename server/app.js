const express = require('express');
const app = express();



const PORT = 5000;

const customMiddleware = (req, res, next) => {
    console.log("middleware Executed");
    next();
}


//middleware are something which take the incoming request
//and modify it before it reaches to actual rout
//handler

//next will stop this middleware and start executing 
//the other middleware if there are more or start executing 
//the code




app.get('/', (req, res) => {
    console.log('Hello');
    res.send('Hello World');
})

app.get('/about', customMiddleware,(req,res) => {
    console.log('About');
    res.send('About Page');
})

app.listen(PORT, () => {
    console.log(`Server is Running on ${PORT}`);
})