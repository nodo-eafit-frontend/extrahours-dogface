const {Router} = require('express');
const cors = require('cors'); // Movido desde la sección "main"
const router = Router();
const employeeRoutes = require('./routes/employee.routes');
const {getAllEmployees, getEmployee, getHoursEmployee} = require('../controllers/filter.controller'); // Mantén "getHoursEmployee"
const {createEmployee, deleteEmployee, updateEmployee} = require('../controllers/form.controller');
const {createHourExtra} = require('../controllers/extras.controller');

router.get('/empleados',getAllEmployees);
router.get('/empleado/:id', getEmployee);
router.post('/create',createEmployee);
router.delete('/delete/:id',deleteEmployee);    
router.put('/update/:documento',updateEmployee);
router.post('/hours',createHourExtra);
router.get('/horasEmpleado/:id',getHoursEmployee);

const app = express();
app.use(cors()); // Permite solicitudes CORS
app.use(express.json()); // Para parsear JSON

app.use('/api', employeeRoutes); // Asegúrate de que las rutas estén prefijadas si es necesario

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

module.exports = router;
