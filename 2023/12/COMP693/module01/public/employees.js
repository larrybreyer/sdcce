let sally = 'Sally Smith';
let mark = 'Mark Martin';
let holly = 'Holly Unlikely';
let amol = 'Amol Shookup';
let dan = 'Dan Johnson';
let shamus = 'Shamus Izaak';
let aaron = 'Aaron Tyres';
const element = /*#__PURE__*/React.createElement("ul", {
  style: {
    'color': 'blue',
    'fontSize': '24px'
  }
}, /*#__PURE__*/React.createElement("li", null, sally), /*#__PURE__*/React.createElement("li", null, mark), /*#__PURE__*/React.createElement("li", null, holly), /*#__PURE__*/React.createElement("li", null, amol), /*#__PURE__*/React.createElement("li", null, dan), /*#__PURE__*/React.createElement("li", null, shamus), /*#__PURE__*/React.createElement("li", null, aaron));
ReactDOM.render(element, document.getElementById('content'));