class EmployeeFilter extends React.Component {
  render() {
    return /*#__PURE__*/React.createElement("div", null, "This is a placeholder for the employee filter.");
  }
}
class EmployeeTable extends React.Component {
  render() {
    const rowStyle = {
      border: "4px solid orange",
      padding: 4
    };
    return /*#__PURE__*/React.createElement("table", {
      style: {
        width: "800px",
        borderCollapse: "collapse"
      }
    }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", {
      style: rowStyle
    }, "Name"), /*#__PURE__*/React.createElement("th", {
      style: rowStyle
    }, "Extension"), /*#__PURE__*/React.createElement("th", {
      style: rowStyle
    }, "Email"), /*#__PURE__*/React.createElement("th", {
      style: rowStyle
    }, "Title"))), /*#__PURE__*/React.createElement("tbody", null, /*#__PURE__*/React.createElement(EmployeeRow, {
      rowStyle: rowStyle,
      employee_name: "Zak Ruvalcaba",
      employee_ext: 1124,
      employee_email: "zak@vectacorp.com",
      employee_title: "Chief Executive Officer"
    }), /*#__PURE__*/React.createElement(EmployeeRow, {
      rowStyle: rowStyle,
      employee_name: "Sally Smith",
      employee_ext: 1125,
      employee_email: "sally@vectacorp.com",
      employee_title: "Director of Sales"
    })));
  }
}
class EmployeeRow extends React.Component {
  render() {
    const style = this.props.rowStyle;
    return /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", {
      style: style
    }, this.props.employee_name), /*#__PURE__*/React.createElement("td", {
      style: style
    }, this.props.employee_ext), /*#__PURE__*/React.createElement("td", {
      style: style
    }, this.props.employee_email), /*#__PURE__*/React.createElement("td", {
      style: style
    }, this.props.employee_title));
  }
}
class EmployeeAdd extends React.Component {
  render() {
    return /*#__PURE__*/React.createElement("div", null, "This is a placeholder for a form to add an employee.");
  }
}
class EmployeeList extends React.Component {
  render() {
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("h1", null, "Employee Management Application"), /*#__PURE__*/React.createElement(EmployeeFilter, null), /*#__PURE__*/React.createElement("hr", null), /*#__PURE__*/React.createElement(EmployeeTable, null), /*#__PURE__*/React.createElement("hr", null), /*#__PURE__*/React.createElement(EmployeeAdd, null));
  }
}
ReactDOM.render( /*#__PURE__*/React.createElement(EmployeeList, null), document.getElementById('content'));

// vim: ft=javascriptreact ai ts=2 et nu