const {Router} = require('express');
const router = Router();
const {getAllEmployees,getEmployee} = require('../controllers/filter.controller')
const {createEmployee, deleteEmployee, updateEmployee} = require('../controllers/form.controller')

router.get('/empleados',getAllEmployees);
router.get('/empleado/:id', getEmployee);
router.post('/create',createEmployee);
router.delete('/delete/:id',deleteEmployee);
router.put('/update/:documento',updateEmployee);


module.exports = router;