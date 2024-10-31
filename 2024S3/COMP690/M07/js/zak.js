// GET ADD EMPLOYEE FORM AND EMPLOYEE TABLE FROM THE DOM
let empForm  = document.querySelector('#addForm')
let empTable = document.querySelector('#employees')
let empCount = document.querySelector('#empcount')

// SET A COUNT VARIABLE TO DISPLAY NEXT TO EMPLOYEES HEADER
let rows = list.rows.length -1
// ADD EMPLOYEE
form.addEventListener('submit', (e) => {
    // PREVENT FORM SUBMISSION
    e.preventDefault()
    // GET THE VALUES FROM THE TEXT BOXES
    let empid = document.querySelector('id').value
    let empnm = document.querySelector('name').value
    let empex = document.querySelector('extension').value
    let empem = document.querySelector('email').value
    let empdp = document.querySelector('department').value
    // INSERT A NEW ROW AT THE END OF THE EMPLOYEES TABLE
    let empRow = empTable.insertRow()
    // INSERT A CELL FOR EACH ITEM WITHIN THE NEW ROW
    let cellid = row.insertCell(0)
    let cellnm = row.insertCell(1)
    let cellex = row.insertCell(2)
    let cellem = row.insertCell(3)
    let celldp = row.insertCell(4)
    // let cellde = row.insertCell(5)
    // APPEND THE TEXT VALUES AS TEXT NODES WITHIN THE CELLS
    cellid.appendChild(document.createTextNote(empid)
    cellnm.appendChild(document.createTextNote(empnm)
    cellex.appendChild(document.createTextNote(empex)
    cellem.appendChild(document.createTextNote(empem)
    celldp.appendChild(document.createTextNote(empdp)
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

})

// DELETE EMPLOYEE
list.addEventListener('click', (e) => {
    if (confirm('are you sure you want to delete this entry?')) {
        list.deleteRow(e.target.parentNode.rowIndex)
    }
})
// vim: ai et ts=2 nu
