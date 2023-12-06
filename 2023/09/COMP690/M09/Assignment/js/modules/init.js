export async function fetchUsers() {
    let users = []
    try {
        const response = await fetch('./data/employees.json'); 
        users = await response.json();
          //  for (let user of users) {
          //      document.body.innerHTML += 
          //               `${user.name},${user.email}<br>`
          //  } 
    } catch (error) {
        console.error(error);
    }
    console.log(users)
    return users;

}
// fetchUsers();
// vim: ai ts=4 et nu
