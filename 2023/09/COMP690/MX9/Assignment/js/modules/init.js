// imported by js/script.js
export async function fetchUsers() {
    try {
        const fetchPromise = fetch(
            './data/employees.json'
        );
    
        await fetchPromise.then((response) => {
          const jsonPromise = response.json();
          jsonPromise.then((data) => {
            console.log(data);
            return data;
          });
        });
    } catch (error) {
        console.error(error);
    }

}
// vim: ai ts=4 et nu
