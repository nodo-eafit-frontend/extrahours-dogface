const pool = require('../db');

const createEmployee = async(req,res,next)=>{
  try {
    const {documento,nombres,apellidos,telefono,email,cargo,
        sueldo_base,empleador_id} = req.body;
    const result = await pool.query("INSERT INTO public.empleado(documento, nombres, apellidos, telefono, email, cargo, sueldo_base, empleador_id) VALUES ($1,$2,$3,$4,$5,$6,$7,$8) RETURNING*",
        [documento,nombres,apellidos,telefono,email,cargo,
            sueldo_base,empleador_id]);     
  } catch (error) {
        next(error); 
  } 
  res.status(204).json({message:"EMPLEADO CREADO"})
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
        const {nombres,apellidos,telefono,email,cargo,
            sueldo_base,empleador_id} = req.body;
            
        const result = await pool.query("UPDATE empleado SET nombres=$2, apellidos=$3, telefono=$4, email=$5, cargo=$6, sueldo_base=$7, empleador_id=$8 WHERE documento = $1",
            [documento,nombres,apellidos,telefono,email,cargo,
            sueldo_base,empleador_id]);
           // res.json(result.rows); 
        if(result.rows.length < 1)
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