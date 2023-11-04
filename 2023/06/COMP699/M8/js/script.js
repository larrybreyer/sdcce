// GET ADD EMPLOYEE FORM AND EMPLOYEE TABLE FROM THE DOM

const $ = selector => document.querySelector(selector);

// SET A COUNT VARIABLE TO DISPLAY NEXT TO EMPLOYEES HEADER
let showEmpCount = (count) => $('#empCount').value = '('+count+')';
var empCount = 0;
showEmpCount(empCount);

// ADD EMPLOYEE
document.addEventListener('submit', (e) => {

    // PREVENT FORM SUBMISSION
    e.target.disabled = true;
    e.preventDefault();


    // GET THE VALUES FROM THE TEXT BOXES
    var id = $("#id").value;
    var name = $("#name").value;
    var ext = $("#extension").value;
    var email = $("#email").value;
    var dept = $("#department").value;


    // INSERT A NEW ROW AT THE END OF THE EMPLOYEES TABLE
    var table = document.getElementById('employees');
    var rowCount = empCount + 1;
    var row   = table.insertRow(rowCount);


    // INSERT A CELL FOR EACH ITEM WITHIN THE NEW ROW
    var cellId = row.insertCell(0);
    var cellName = row.insertCell(1);
    var cellExt = row.insertCell(2);
    var cellEmail = row.insertCell(3);
    var cellDept = row.insertCell(4);
    var cellDelete = row.insertCell(5);

    // APPEND THE TEXT VALUES AS TEXT NODES WITHIN THE CELLS
    cellId.innerText = id;
    cellName.innerText = name;
    cellExt.innerText = ext;
    cellEmail.innerText = email;
    cellDept.innerText = dept;

    // CREATE THE DELETE BUTTON
    cellDelete.innerHTML = '<button onclick="delRow(this)">&#X274C</button>';

    // RESET THE FORM
    $('#id').value = '';
    $('#name').value = '';
    $('#extension').value = '';
    $('#email').value = '';
//  $('#department').value = 'Administrative';

    // SET FOCUS BACK TO THE ID TEXT BOX
    $('#id').focus();

    // INCREMENENT THE NUMBER OF EMPLOYEES IN THE TABLE
    empCount += 1;
    showEmpCount(empCount);

});

// DELETE EMPLOYEE
function delRow(x) {
    var rowNumber = x.closest('tr').rowIndex;
    if(confirm('Delete this row?')) {
        var table = document.getElementById('employees');
        table.deleteRow(rowNumber);
        empCount -= 1;
        showEmpCount(empCount);
    } 
}

// vim: ft=javascript ai ts=2 et
