function show(arrEmployees) {
    let i = 1;
    // LOOP THROUGH THE EMPLOYEE ARRAY
    for (let employee of arrEmployees) {
        console.log(`${i}. ${employee}`)
        i++;
    }
    console.log('');
}


function init() {
    // DISPLAY COMMAND MENU
    console.log('THE EMPLOYEE MANAGMENT APPICATION')
    console.log('---------------------------------')
    console.log('COMMAND MENU')
    console.log('show    - Show all employees')
    console.log('add     - Add an employee')
    console.log('del     - Delete an employee')
    console.log('exit    - Exit the application')
    console.log('---------------------------------')
    console.log('')

    //START WITH AN EMPTY ARRAY
    let arrEmployees = []
    // FETCH JSON DATA
    fetch('data/employees.json')
        .then(response => response.json())
        .then(data => {
            for (employee of data.employees) {
                arrEmployees.push(`${employee.name} (${employee.title}) `)
            }
            // KEEP THE USER ON THE COMMAND MENU
            do {
                // ALLOW THE USER TO ENTER A COMMAND
                let command = prompt('Enter a command: ')
                if(command != null) {
                    comand = command.toLowerCase()
                    if (command === 'show') {
                        show(arrEmployees)
                    } else if (command === 'add') {
                        add(arrEmployees)
                    } else if (command === 'del') {
                        del(arrEmployees)
                    } else if (command === 'exit') {
                        break
                    } else {
                    }
                        alert('Please enter a valid command.')
                } else {
                    alert('Please enter a command.')
                }
            } while (true)
            console.log('The application has terminated.')
        })
        .catch(e => console.log(e.message))
}
init()
// vim: ts=4 ai et nu
