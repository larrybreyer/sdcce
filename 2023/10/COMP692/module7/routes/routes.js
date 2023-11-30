import express from 'express'
import {getAllEmployees, getEmployee, createEmployeeView, 
        createEmployee, updateEmployee, updateEmployeeView, deleteEmployee} 
        from '../controllers/employees.js'
const router = express.Router()
router.route('/')
    .get(getAllEmployees)
router.route('/add')
    .get(createEmployeeView)    // Display the Form page
    .post(createEmployee)       // Send the data to MongoDB
router.route('/update/:id')
    .get(updateEmployeeView)    
    .patch(updateEmployee)
router.route('/:id')
    .get(getEmployee)
    .delete(deleteEmployee)

export default router

// vim: ai ts=2 et nu
