"use strict"
function view(employees) {
  let emplID = 1
  employees.forEach((employee) => {
    console.log(`${String(emplID)}. ${employee}`)
    emplID++
  })
}

function add(employees) {
  let employee = prompt('Enter employee name: ')
  employees.push(employee)
  console.log('Employee Added.')
}

function remove(employees) {
  let emplID = parseInt(prompt('Enter employee ID: ')) 
  if (emplID > 0 && emplID <= employees.length) {
      let employee = employees.splice(emplID -1,1)
      console.log(`${employee} was deleted.`)
  } else {
    emplID = parseInt(prompt('Invalid!  Enter employee ID: '))
  }

}

function init() {
  console.log('Employee Management Application')
  console.log('-------------------------------')
  console.log('Command Menu')
  console.log('view --------------------------')
  console.log('add ---------------------------')
  console.log('remove ------------------------')
  console.log('exit - exit the application----')
  console.log('')


  let employees = [
    'Zak Ruvalcaba',
    'Sally Smith',
    'Pepe Ramirez',
    'Joe Johnson',
    'Stew Franklin'
  ]


  do {
    let command = prompt('Enter your command')
    
    if(command !== null ) {
      if (command === 'view') {
        view(employees)
      } else if (command === 'add') {
        add(employees)
      } else if (command === 'remove') {
        remove(employees)
      } else if (command === 'exit') {
        break
      }
    } else{
      alert('Please enter a command.')
    }
  } while(true)
  console.log('program terminated.')
}

init()

// vim: ai ts=2 et nu
