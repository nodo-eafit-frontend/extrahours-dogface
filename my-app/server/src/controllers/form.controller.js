const { DatabaseError } = require('pg');
const pool = require('../db');

const createEmployee = async(req,res,next)=>{
  try {
    const {documento,nombres,apellidos,telefono,email,carga,area,
        sueldo_base,empleador_idempleador} = req.body;
    const result = await pool.query("INSERT INTO public.empleado(documento, nombres, apellidos, telefono, email, cargo, area, sueldo_base, empleador_idempleador) VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9) RETURNING*",
        [documento,nombres,apellidos,telefono,email,carga,area,
            sueldo_base,empleador_idempleador]);     
  } catch (error) {
        next(error); 
  } 
  res.status(204).json({message:"EMPLEADO ELIMINADO"})
}

const deleteEmployee = async (req,res,next)=>{
    
    try {
        const {id} = req.params;
        const result = await pool.query("DELETE  FROM empleado WHERE documento = $1",[id]);
    
        if(result.rows.length == 0)
            return res.status(404).json({message:"EMPLEADO NO ENCONTRADO" });
        //res.json({message:"EMPLEADO NO ENCONTRADO"});    
        
    } catch (error) {
        next(error);   
    }
    res.status(204).json({message:"EMPLEADO ELIMINADO"})
}

const updateEmployee = async (req,res,next)=>{
    try{
        const {documento} = req.params;
        const {nombres,apellidos,telefono,email,carga,area,
            sueldo_base,empleador_idempleador} = req.body;
            
        const result = await pool.query("UPDATE empleado SET nombres=$2, apellidos=$3, telefono=$4, email=$5, cargo=$6, area=$7, sueldo_base=$8, empleador_idempleador=$9 WHERE documento = $1",
            [documento,nombres,apellidos,telefono,email,carga,area,
            sueldo_base,empleador_idempleador]);
           // res.json(result.rows); 
        if(result.rows.length == 0)
            return res.status(404).json({message:"EMPLEADO NO ENCONTRADO" }); 
            
    } catch (error) {
        next(error);   
    }
    res.status(204).json({message:"EMPLEADO EDITADO"})
    
}

module.exports = {
    createEmployee,
    deleteEmployee,
    updateEmployee
};