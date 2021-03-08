const express = require('express');
const morgan = require('morgan');
const swaggerUI = require('swagger-ui-express');
const swaggerJSON = require("./swagger.json");

const router = require('./router/index.routes');
const app = express();

// Pasang middleware swagger
app.use('/docs', swaggerUI.serve, swaggerUI.setup(swaggerJSON));

const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(morgan('dev'));

app.use("/api",router)

app.listen(PORT,()=>{
    console.log(`Server is started at port: ${PORT}`)
})