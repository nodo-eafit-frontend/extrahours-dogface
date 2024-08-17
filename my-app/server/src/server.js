const express = require('express');
const morgan  = require('morgan');
const app = express();
const employeeRouter = require('../src/routes/employee.routes')


app.use(morgan('dev'));
app.use(express.json());
app.use(employeeRouter);
app.use((err,req,res,next)=>{
    return res.json({message:'errorrrr...'})
});
app.listen(3000);
console.log('pueto 3000')