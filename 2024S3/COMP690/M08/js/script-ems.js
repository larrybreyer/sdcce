"use strict";

const $ = selector => document.querySelector(selector);


const newWebStorage = `
[
 {
   "EmployeeID": 10000001,
   "Full Name": "Walt Disney",
   "Ext.": 1001,
   "Email": "memouse@disney.com",
   "Department": "Executive"
 },
 {
   "EmployeeID": 10000002,
   "Full Name": "Mickey Mouse",
   "Ext.": 1002,
   "Email": "wdisney@disney.com",
   "Department": "Sales"
 },
 {
   "EmployeeID": 10000003,
   "Full Name": "Donald Duck",
   "Ext.": 1003,
   "Email": "dduck@disney.com",
   "Department": "Engineering"
 },
 {
   "EmployeeID": 10000004,
   "Full Name": "Peter Pan",
   "Ext.": 1004,
   "Email": "ppan@disney.com",
   "Department": "Marketing"
 },
 {
   "EmployeeID": 10000005,
   "Full Name": "Minnie Mouse",
   "Ext.": 1005,
   "Email": "mymouse@disney.com",
   "Department": "Administrative"
 }
]
`
let text = null;            // string version of employees
let empArray = null;        // JSON version of employees

// GET ADD EMPLOYEE FORM AND EMPLOYEE TABLE FROM THE DOM
let form = document.getElementById('addForm')
let list = document.getElementById('employees')

// SET A COUNT VARIABLE TO DISPLAY NEXT TO EMPLOYEES HEADER
let rows = list.rows.length -1

// ADD EMPLOYEE
form.addEventListener('submit', (e) => {
    // PREVENT FORM SUBMISSION
    e.preventDefault()

    // GET THE VALUES FROM THE TEXT BOXES
    let empid = document.getElementById('id').value
    let empnm = document.getElementById('name').value
    let empex = document.getElementById('extension').value
    let empem = document.getElementById('email').value
    let empdp = document.getElementById('department').value

    // INSERT A NEW ROW AT THE END OF THE EMPLOYEES TABLE
    let row = list.insertRow(list.rows.length)

    // INSERT A CELL FOR EACH ITEM WITHIN THE NEW ROW
    let cellid = row.insertCell(0)
    let cellnm = row.insertCell(1)
    let cellex = row.insertCell(2)
    let cellem = row.insertCell(3)
    let celldp = row.insertCell(4)
    // let cellde = row.insertCell(5)

    // APPEND THE TEXT VALUES AS TEXT NODES WITHIN THE CELLS
    cellid.innerHTML = empid
    cellnm.innerHTML = empnm
    cellex.innerHTML = empex
    cellem.innerHTML = empem
    celldp.innerHTML = empdp

    // CREATE THE DELETE BUTTON
    let deleteButton = document.createElement('button')
    // add bootstrap classes for a button
    deleteButton.className = 'btn btn-danger btn-sm float-right delete'
    // create text node for delete button and set it to 'X'
    let textDelete = document.createTextNode('X')
    // append text node to delete button
    deleteButton.appendChild(textDelete)
    row.append(deleteButton)

    // RESET THE FORM
    form.reset()

    // SET FOCUS BACK TO THE ID TEXT BOX
    $("#id").select()

    // INCREMENENT THE NUMBER OF EMPLOYEES IN THE TABLE
    rows = list.rows.length -1

    empArray = newEmpArray();
    putData();

})

// DELETE EMPLOYEE
list.addEventListener('click', (e) => {
    if (confirm('are you sure you want to delete this entry?')) {
        list.deleteRow(e.target.parentNode.rowIndex)
        empArray = newEmpArray();
        putData();
    }
})

// Load empArray
function getData() {
    text = localStorage.getItem('employees');
    if ( text == null ) {
        console.log("employees local storage not found. Initializing");
        text = newWebStorage;
    } else {
        console.log("employees local storage found. Loading");
    }
    empArray = JSON.parse(text);
}   

// Save empArray
function putData() {
    localStorage.setItem('employees',JSON.stringify(empArray));
    console.log("employees local storage updated.");
}

// Call function to load empArray
getData();


// Initialize table (list)
for ( let i = 0; i < empArray.length; i++ ) {

    // GET THE VALUES FROM THE Employee Array
    let employee = empArray[i];
    let empid = employee['EmployeeID'];
    let empnm = employee['Full Name'];
    let empex = employee['Ext.'];
    let empem = employee['Email'];
    let empdp = employee['Department'];

    // INSERT A NEW ROW AT THE END OF THE EMPLOYEES TABLE
    let row = list.insertRow(list.rows.length)

    // INSERT A CELL FOR EACH ITEM WITHIN THE NEW ROW
    let cellid = row.insertCell(0)
    let cellnm = row.insertCell(1)
    let cellex = row.insertCell(2)
    let cellem = row.insertCell(3)
    let celldp = row.insertCell(4)
    // let cellde = row.insertCell(5)

    // APPEND THE TEXT VALUES AS TEXT NODES WITHIN THE CELLS
    cellid.innerHTML = empid
    cellnm.innerHTML = empnm
    cellex.innerHTML = empex
    cellem.innerHTML = empem
    celldp.innerHTML = empdp

    // CREATE THE DELETE BUTTON
    let deleteButton = document.createElement('button')
    // add bootstrap classes for a button
    deleteButton.className = 'btn btn-danger btn-sm float-right delete'
    // create text node for delete button and set it to 'X'
    let textDelete = document.createTextNode('X')
    // append text node to delete button
    deleteButton.appendChild(textDelete)
    row.append(deleteButton)
}


function newEmpArray() {
    let newArray = new Array(list.rows.length - 1);
    for( let i = 0 ; i < list.rows.length - 1; i++ ) {
        let newRow = {
            'EmployeeID' : list.rows[i+1].cells[0].innerHTML,
            'Full Name' : list.rows[i+1].cells[1].innerHTML,
            'Ext.' : list.rows[i+1].cells[2].innerHTML,
            'Email' : list.rows[i+1].cells[3].innerHTML,
            'Department' : list.rows[i+1].cells[4].innerHTML
        }
        newArray[i] = newRow;
    }   
    return newArray;
} 

// vim: ai et ts=2 nu
