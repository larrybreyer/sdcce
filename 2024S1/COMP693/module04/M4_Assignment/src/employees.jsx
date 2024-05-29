import React from 'react'
// import ReactDOM from 'react-dom'
import {createRoot} from 'react-dom/client'
import EmployeeList from './EmployeeList.jsx'

// Just adding a comment to see if it forces a recompile

const root = createRoot(document.getElementById('content'))
root.render(
  <React.StrictMode>
    <EmployeeList />
  </React.StrictMode>,
)
