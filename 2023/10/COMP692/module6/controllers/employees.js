import Employee from '../models/Employee.js'

const getAllEmployees = (req, res) => {
    res.send('Get all employees')
}

const getEmployee = (req, res) => {
    res.send('Get a single employee')
}

const createEmployee = async (req, res) => {
    try {
        const employee = await Employee.create(req.body)
        res.status(201).json({employee})
    } catch (err) {
        res.status(500).json({msg: err})
    }
}

const updateEmployee = (req, res) => {
    res.send('Update an existing employee')
}

const deleteEmployee = (req, res) => {
    res.send('Delete an employee')
}          

export {
    getAllEmployees,
    getEmployee,
    createEmployee,
    updateEmployee,
    deleteEmployee
} 

// vim: ai ts=2 et nu
