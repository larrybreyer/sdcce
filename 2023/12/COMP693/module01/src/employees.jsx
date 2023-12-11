let sally = 'Sally Smith'
let mark = 'Mark Martin'
let holly = 'Holly Unlikely'
let amol = 'Amol Shookup'
let dan = 'Dan Johnson'
let shamus = 'Shamus Izaak'
let aaron = 'Aaron Tyres'
const element = (
    <ul style={{'color':'blue', 'fontSize': '24px'}}>
        <li>{sally}</li>
        <li>{mark}</li>
        <li>{holly}</li>
        <li>{amol}</li>
        <li>{dan}</li>
        <li>{shamus}</li>
        <li>{aaron}</li>
    </ul>
)
ReactDOM.render(element, document.getElementById('content'))