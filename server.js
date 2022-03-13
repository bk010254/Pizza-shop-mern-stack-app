const express = require('express');
const dotenv = require('dotenv');
const path = require('path');


const connectDB = require('./config/config');
express('colors')
const morgan = require('morgan');

//config//
dotenv.config();

//connection mongoDB
connectDB()



const app = express();

//midalwares//
app.use(express.json());
app.use(morgan('dev'));

//route//
app.use('/api/pizzas', require('./routes/pizzaRoute'));
app.use('/api/users', require("./routes/userRoutes"));
app.use("/api/orders", require("./routes/orderRoute"));

if(process.env.NODE_ENV === 'production'){
    app.use(express.static(path.join(__dirname, '/CLIENT/build')))
    app.get('*', (req,res) =>{
        res.sendFile(path.resolve(__dirname,"CLIENT","build","index.html"))
    })
}else{
    app.get('/', (req, res) => {
        res.send("<h1>HELLO FROM NODE SERVER ffdserwe</h1>");
    });
}



const port = process.env.PORT || 8080
app.listen(port, () => {
    console.log(`Server Running On ${process.env.NODE_ENV} mode on port no ${process.env.PORT}`.bgMagenta.white);
})