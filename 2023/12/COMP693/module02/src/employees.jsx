
class EmployeeFilter extends React.Component {
  render() {
    return ( <div>This is a placeholder for the employee filter.</div>)
  }
}

class EmployeeTable extends React.Component {
  render() {
    const rowStyle = {border: "4px solid orange", padding: 4}
    return (
      <table style={{width: "800px", borderCollapse: "collapse"}}>
        <thead>
          <tr>
            <th style={rowStyle}>Name</th>
            <th style={rowStyle}>Extension</th>
            <th style={rowStyle}>Email</th>
            <th style={rowStyle}>Title</th>
          </tr>
        </thead>
        <tbody>
          <EmployeeRow  
            rowStyle = {rowStyle}
            employee_name="Zak Ruvalcaba" 
            employee_ext={1124}
            employee_email="zak@vectacorp.com"
            employee_title="Chief Executive Officer" />
          <EmployeeRow  
            rowStyle = {rowStyle}
            employee_name="Sally Smith" 
            employee_ext={1125}
            employee_email="sally@vectacorp.com"
            employee_title="Director of Sales" />
        </tbody>
      </table>
    )
  }
}

class EmployeeRow extends React.Component {
  render() {
    const style = this.props.rowStyle
    return (
      <tr>
        <td style={style}>{this.props.employee_name}</td>
        <td style={style}>{this.props.employee_ext}</td>
        <td style={style}>{this.props.employee_email}</td>
        <td style={style}>{this.props.employee_title}</td>
      </tr>
    )
  }
}

class EmployeeAdd extends React.Component {
  render() {
    return (
      <div>This is a placeholder for a form to add an employee.</div>
    )
  }
}

class EmployeeList extends React.Component {
  render() {
    return (
            <React.Fragment>
          <h1>Employee Management Application</h1>
          <EmployeeFilter />
          <hr />
          <EmployeeTable />
          <hr />
          <EmployeeAdd />
            </React.Fragment>
    )
  }
}

ReactDOM.render(<EmployeeList />, document.getElementById('content'))

// vim: ft=javascriptreact ai ts=2 et nu

