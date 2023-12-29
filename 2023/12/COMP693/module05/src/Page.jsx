import React from 'react'
import { NavLink } from 'react-router-dom'  
import Contents from './Contents.jsx'

function NavBar() {
  const Separator = () => <span> | </span>
  return (
    <nav>
      <NavLink end to="/">Home</NavLink>
      <Separator />
      <NavLink to="/employees">Employees</NavLink>
      <Separator />
      <NavLink to="/report">Report</NavLink>
    </nav>
  )
}

export default function Page() {
  return (
    <div>
      <NavBar />
      <Contents />
    </div>
  )
}
// vim: ai ts=2 et nu
