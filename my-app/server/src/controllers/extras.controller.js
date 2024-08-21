const pool = require('../db');
const START_HOUR_NIGHT = 21;
const END_HOUR_NIGHT = 6;

const createHourExtra = async(req,res,next)=>{
    
    try{
        const {document,startDate,endDate,festive} = req.body;
        const getHourstart = new Date(startDate);
        const getHourEnd = new Date(endDate);
        let hourStart = (getHourstart.getHours());
        let hourEnd = (getHourEnd.getHours());
        let horas_nocturnas = 0;
        let horas_diurnas = 0;
        let  horas_diurnas_festivas =0;
        let horas_nocturnas_festivas = 0;
        if (hourStart<hourEnd){
            for(let hour = hourStart;hour < hourEnd;hour++){
                
                if(hour >= START_HOUR_NIGHT || hour <= END_HOUR_NIGHT ){
                    (festive)?horas_nocturnas_festivas++:horas_nocturnas++;
                }else{
                    (festive)?horas_diurnas_festivas++:horas_diurnas++;
                }
           }
        }
        const result = await pool.query("INSERT INTO public.horas_extras(hora_inicio, hora_fin, horas_diurnas, horas_nocturnas, horas_diurnas_festivas, horas_nocturnas_festivas, empleado_documento)VALUES ($1,$2,$3,$4,$5,$6,$7)RETURNING*",
            [startDate,endDate,horas_diurnas,horas_nocturnas,horas_diurnas_festivas,horas_nocturnas_festivas,document]);
         
       
        if(result.rows.length == 0)
            return res.status(404).json({message:"EMPLEADO NO ENCONTRADO" }); 
            
    } catch (error) {
        next(error);   
    }
    res.status(204).json({message:"horas creadas"})
}


module.exports = {
    createHourExtra
}