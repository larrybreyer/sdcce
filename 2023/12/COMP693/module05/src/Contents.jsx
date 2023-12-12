import React from 'react'
import { Route, Routes, Navigate } from 'react-router-dom'
import EmployeeList from './EmployeeList.jsx'
import EmployeeReport from './EmployeeReport.jsx'

import EmployeeEdit from './EmployeeEdit.jsx'

const NotFound = () => <h1>Page Not Found</h1>

export default function Contents() {
	return (
        <Routes>        
            <Route path="/employees" element={<EmployeeList />} />
            <Route path="/edit/:id" element={<EmployeeEdit />} />
            <Route path="/report" element={<EmployeeReport />} />
            <Route path="/" element={<Navigate replace to="/employees" />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
	)
}
