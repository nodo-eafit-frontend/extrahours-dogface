const express = require('express');
const morgan  = require('morgan');
const cors = require('cors');
const app = express();
const employeeRouter = require('../src/routes/employee.routes')

app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(employeeRouter);
app.use((err,req,res,next)=>{
    return res.json({message:err.message})
});
app.listen(4000);
console.log('pueto 4000')