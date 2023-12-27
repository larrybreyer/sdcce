import React from 'react';
// import ReactDOM from 'react-dom'
import { createRoot } from 'react-dom/client';
import EmployeeList from './EmployeeList.jsx';
const root = createRoot(document.getElementById('content'));
root.render( /*#__PURE__*/React.createElement(React.StrictMode, null, /*#__PURE__*/React.createElement(EmployeeList, null)));