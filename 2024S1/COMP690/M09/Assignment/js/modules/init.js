// imported by js/script.js
export async function fetchUsers() {
    let users = [];
    try {
        const response = await fetch('./data/employees.json'); 
        users = await response.json();
    } catch (error) {
        console.error(error);
    }
    //  console.log('fetchUsers received', users);
    return users;

}
// vim: ft=javascript ai ts=4 et nu
