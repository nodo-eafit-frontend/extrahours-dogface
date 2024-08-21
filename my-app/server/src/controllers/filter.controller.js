const pool = require('../db');

const  getAllEmployees = async(req,res,next)=>{
    console.log("empleados");
    try {
        const result = await pool.query('SELECT * FROM empleado');
    res.json(result.rows);
        
    } catch (error) {
        next(error);
    }
    
}


const getEmployee = async(req,res,next)=>{
    try {
        const {id} = req.params; 
    const result = await pool.query('SELECT * FROM empleado WHERE documento = $1',[id]);
    
    if(result.rows.length == 0)return res.status(404).json({
        message:"NO ENCONTRADO"
    })
    res.json(result.rows);
        
    } catch (error) {
        next(error);
    }
    
}
const getHoursEmployee = async(req,res,next)=>{
    try {
        const {id} = req.params; 
    const result = await pool.query('select documento, nombres, apellidos,sueldo_base, horas_diurnas from empleado,horas_extras WHERE empleado_documento = $1',[id]);
    
    if(result.rows.length == 0)return res.status(404).json({
        message:"NO ENCONTRADO"
    })
    res.json(result.rows);
        
    } catch (error) {
        next(error);
    }
    
}



module.exports = {
    getAllEmployees,
    getEmployee,
    getHoursEmployee
}