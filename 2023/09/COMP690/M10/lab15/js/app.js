// CREATE AN ARRAY OF EMPLOYEES
let arrEmployees = [
    [23424665, "Amal Shookup", 2344, "amal@vectacorp.com", "Administrative"],
    [12341244, "Holly Unlikely", 5352, "holly@vectacorp.com", "Sales"],
    [14545423, "Robin Banks", 7867, "robin@vectacorp.com", "Marketing"],
    [13413453, "Cody Pendant", 1235, "cody@vectacorp.com", "Sales"],
    [11111111, "Evan Elpus", 5433, "evan@vectacorp.com", "Sales"],
    [22222222, "Haywood Jabuzoff", 5421, "haywood@vectacorp.com", "Engineering"],
    [33333333, "Ginger Vitis", 7654, "ginger@vectacorp.com", "Marketing"],
    [44444444, "Lois Bidder", 7890, "lois@vectacorp.com", "Executive"],
    [55555555, "Aaron Tyres", 5674, "aaron@vectacorp.com", "Administrative"],
    [66666666, "Xavier Breath", 4367, "xavier@vectacorp.com", "Administrative"],
    [77777777, "Justin Case", 1111, "justin@vectacorp.com", "Engineering"],
    [88888888, "Stu Pedasso", 3565, "stu@vectacorp.com", "Sales"],
    [99999999, "Juan Nightstand", 2555, "juan@vectacorp.com", "Executive"],
    [11112222, "Ilene Dover", 4050, "ilene@vectacorp.com", "Administrative"],
    [11113333, "Hadley Newham", 4995, "hadley@vectacorp.com", "Engineering"],
    [11114444, "Eureka Garlic", 4367, "eureka@vectacorp.com", "Administrative"],
    [11115555, "Hugo First", 1224, "hugo@vectacorp.com", "QA"],
    [11116666, "Jillian Here", 8867, "jullian@vectacorp.com", "QA"],
    [22227777, "Gladys Overwith", 4367, "gladys@vectacorp.com", "Marketing"]
]

// CHECK TO SEE IF STORAGE OBJECT EXISTS WHEN THE PAGE LOADS
// IF DOES, RETURN STORAGE OBJECT INTO ARRAY INSTEAD OF POPULATED ARRAY
if (localStorage.getItem('employees') !== null) {
    arrEmployees = JSON.parse(localStorage.getItem('employees'))
}

// GET DOM ELEMENTS
let form        = document.getElementById('addForm')
let empTable    = document.getElementById('empTable')
let empCount    = document.getElementById('empCount')

// BUILD THE EMPLOYEES TABLE WHEN THE PAGE LOADS
buildGrid()

// ADD EMPLOYEE
form.addEventListener('submit', (e) => {
    // PREVENT FORM SUBMISSION
    e.preventDefault()
    // GET THE VALUES FROM THE TEXT BOXES
    let empID       = parseInt(document.getElementById('id').value)
    let empName     = document.getElementById('name').value
    let empExt      = parseInt(document.getElementById('extension').value)
    let empEmail    = document.getElementById('email').value
    let empDept     = document.getElementById('department').value
    // ADD THE NEW EMPLOYEE TO A NEW ARRAY OBJECT
    let arrNewEmployee = [empID, empName, empExt, empEmail, empDept]
    // PUSH THE NEW ARRAY TO THE *EXISTING* EMPLOYEES ARRAY
    arrEmployees.push(arrNewEmployee)
    // BUILD THE GRID
    buildGrid()
    // RESET THE FORM
    form.reset()
    // SET FOCUS BACK TO THE ID TEXT BOX
    form.id.focus()
})

// DELETE EMPLOYEE
empTable.addEventListener('click', (e) => {    
    if (e.target.classList.contains('delete')) {
        // CONFIRM THE DELETE
        if (confirm('Are you sure you want to delete this user?')) {
            // GET THE SELECTED ROWINDEX FOR THE TR (PARENTNODE.PARENTNODE)
            let rowIndex = e.target.parentElement.parentElement.rowIndex
            // REMOVE EMPLOYEE FROM ARRAY
            arrEmployees.splice(rowIndex - 1, 1)
            // BUILD THE GRID
            buildGrid()
        }
    }
})

// BUILD THE EMPLOYEES GRID
function buildGrid() {
    // REMOVE THE EXISTING SET OF ROWS BY REMOVING THE ENTIRE TBODY SECTION
    empTable.lastElementChild.remove()
    // REBUILD THE TBODY FROM SCRATCH
    let tbody = document.createElement('tbody')
    // LOOP THROUGH THE ARRAY OF EMPLOYEES
    // REBUILDING THE ROW STRUCTURE
    for (let employee of arrEmployees) {
        tbody.innerHTML += 
        `
            <tr>
                <td>${employee[0]}</td>
                <td>${employee[1]}</td>
                <td>${employee[2]}</td>
                <td>${employee[3]}</td>
                <td>${employee[4]}</td>
                <td><button class='btn btn-sm btn-danger delete'>X</button></td>
            </tr>
        `
    }
    // BIND THE TBODY TO THE EMPLOYEE TABLE
    empTable.appendChild(tbody)
    // UPDATE EMPLOYEE COUNT
    empCount.value = `(${arrEmployees.length})`
    // STORE THE ARRAY IN STORAGE
    localStorage.setItem('employees', JSON.stringify(arrEmployees))
}