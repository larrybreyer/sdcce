"use strict";

const $ = selector => document.querySelector(selector);

// GET ADD EMPLOYEE FORM AND EMPLOYEE TABLE FROM THE DOM
let form = document.getElementById('addForm');
let list = document.getElementById('employees');
let emps = document.getElementById('empCount');
emps.value =  '(0)';

// SET A COUNT VARIABLE TO DISPLAY NEXT TO EMPLOYEES HEADER
let rows = list.rows.length -1

// ADD EMPLOYEE
form.addEventListener('submit', (e) => {
    // PREVENT FORM SUBMISSION
    e.preventDefault()

    // GET THE VALUES FROM THE TEXT BOXES
    let empid = document.getElementById('id').value;
    let empnm = document.getElementById('name').value;
    let empex = document.getElementById('extension').value;
    let empem = document.getElementById('email').value;
    let empdp = document.getElementById('department').value;

    // INSERT A NEW ROW AT THE END OF THE EMPLOYEES TABLE
    let row = list.insertRow(list.rows.length);

    // INSERT A CELL FOR EACH ITEM WITHIN THE NEW ROW
    let cellid = row.insertCell();
    let cellnm = row.insertCell();
    let cellex = row.insertCell();
    let cellem = row.insertCell();
    let celldp = row.insertCell();
    let rowDel = row.insertCell();

    // APPEND THE TEXT VALUES AS TEXT NODES WITHIN THE CELLS
    cellid.innerHTML = empid;
    cellnm.innerHTML = empnm;
    cellex.innerHTML = empex;
    cellem.innerHTML = empem;
    celldp.innerHTML = empdp;

    // CREATE THE DELETE BUTTON
    let deleteButton = document.createElement('button')
    // add bootstrap classes for a button
    deleteButton.className = 'btn btn-sm btn-danger delete';
    // create text node for delete button and set it to 'X'
    deleteButton.appendChild(document.createTextNode('X'));
    // append button
    rowDel.appendChild(deleteButton);

    // RESET THE FORM
    form.reset()

    // SET FOCUS BACK TO THE ID TEXT BOX
    $("#id").select()

    // INCREMENENT THE NUMBER OF EMPLOYEES IN THE TABLE
    rows = list.rows.length -1
    emps.value =  `(${rows})`;

})

list.addEventListener('click', (e) => {
  // DELETE EMPLOYEE?
  if (e.target.classList.contains('delete')) {
    // CONFIRM DELETE
    if (confirm('are you sure you want to delete this entry?')) {
      list.deleteRow(e.target.parentElement.parentElement.rowIndex);
      // DECREMENENT THE NUMBER OF EMPLOYEES IN THE TABLE
      rows = list.rows.length -1
      emps.value =  `(${rows})`;
    }
  }
});
// vim: ai et ts=2 nu
