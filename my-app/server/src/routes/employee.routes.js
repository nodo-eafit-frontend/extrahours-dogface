const {Router} = require('express');
const router = Router();
const {getAllEmployees,getEmployee, getHoursEmployee} = require('../controllers/filter.controller')
const {createEmployee, deleteEmployee, updateEmployee} = require('../controllers/form.controller')
const{createHourExtra} = require('../controllers/extras.controller')


router.get('/empleados',getAllEmployees);
router.get('/empleado/:id', getEmployee);
router.post('/create',createEmployee);
router.delete('/delete/:id',deleteEmployee);
router.put('/update/:documento',updateEmployee);
router.post('/hours',createHourExtra);
router.get('/horasEmpleado/:id',getHoursEmployee);


module.exports = router;