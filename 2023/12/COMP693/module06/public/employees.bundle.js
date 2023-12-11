(()=>{"use strict";var e,t,n,r={295:(e,t,n)=>{var r=n(294),o=n(745),l=n(655),a=n(250);function u(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function c(){var e,t,n=(0,a.s0)(),o=(e=(0,l.lr)(),t=1,function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,l=[],a=!0,u=!1;try{for(n=n.call(e);!(a=(r=n.next()).done)&&(l.push(r.value),!t||l.length!==t);a=!0);}catch(e){u=!0,o=e}finally{try{a||null==n.return||n.return()}finally{if(u)throw o}}return l}}(e,t)||function(e,t){if(e){if("string"==typeof e)return u(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?u(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}())[0];return r.createElement("div",null,"Currently Employed:"," ",r.createElement("select",{value:o.get("employed")||"",onChange:function(e){return n(e.target.value?"/employees?employed=".concat(e.target.value):"/employees")}},r.createElement("option",{value:""},"All"),r.createElement("option",{value:"true"},"Employed"),r.createElement("option",{value:"false"},"Not Employed")))}function i(e){return i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},i(e)}function m(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function p(e,t){return p=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},p(e,t)}function f(e,t){if(t&&("object"===i(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return y(e)}function y(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function s(e){return s=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},s(e)}var d=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&p(e,t)}(u,e);var t,n,o,l,a=(o=u,l=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=s(o);if(l){var n=s(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return f(this,e)});function u(){var e;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(e=a.call(this)).handleSubmit=e.handleSubmit.bind(y(e)),e}return t=u,(n=[{key:"handleSubmit",value:function(e){e.preventDefault();var t=document.forms.employeeAdd,n={name:t.name.value,extension:t.ext.value,email:t.email.value,title:t.title.value};this.props.createEmployee(n),t.name.value="",t.ext.value="",t.email.value="",t.title.value=""}},{key:"render",value:function(){return r.createElement("form",{name:"employeeAdd",onSubmit:this.handleSubmit},"Name: ",r.createElement("input",{type:"text",name:"name"}),r.createElement("br",null),"Extension: ",r.createElement("input",{type:"text",name:"ext",maxLength:4}),r.createElement("br",null),"Email: ",r.createElement("input",{type:"text",name:"email"}),r.createElement("br",null),"Title: ",r.createElement("input",{type:"text",name:"title"}),r.createElement("br",null),r.createElement("button",null,"Add"))}}])&&m(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),u}(r.Component);function b(e){return b="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},b(e)}function E(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function h(e,t){return h=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},h(e,t)}function v(e,t){if(t&&("object"===b(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return O(e)}function O(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function g(e){return g=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},g(e)}function j(e){var t=(0,a.TH)().search,n=new URLSearchParams(t).get("employed"),o=e.employees.filter((function(e){return!n||String(e.currentlyEmployed)===n})).map((function(t){return r.createElement(w,{key:t._id,employee:t,deleteEmployee:e.deleteEmployee})}));return r.createElement("table",{className:"bordered-table"},r.createElement("thead",null,r.createElement("tr",null,r.createElement("th",null,"Action"),r.createElement("th",null,"Name"),r.createElement("th",null,"Extension"),r.createElement("th",null,"Email"),r.createElement("th",null,"Title"),r.createElement("th",null,"Date Hired"),r.createElement("th",null,"Currently Employed?"),r.createElement("th",null))),r.createElement("tbody",null,o))}function w(e){return r.createElement("tr",null,r.createElement("td",null,r.createElement(l.rU,{to:"/edit/".concat(e.employee._id)},"Edit")),r.createElement("td",null,e.employee.name),r.createElement("td",null,e.employee.extension),r.createElement("td",null,e.employee.email),r.createElement("td",null,e.employee.title),r.createElement("td",null,e.employee.dateHired.toDateString()),r.createElement("td",null,e.employee.currentlyEmployed?"Yes":"No"),r.createElement("td",null,r.createElement("button",{onClick:function(){e.deleteEmployee(e.employee._id)}},"DELETE")))}var S=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&h(e,t)}(u,e);var t,n,o,l,a=(o=u,l=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=g(o);if(l){var n=g(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return v(this,e)});function u(){var e;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(e=a.call(this)).state={employees:[]},e.createEmployee=e.createEmployee.bind(O(e)),e.deleteEmployee=e.deleteEmployee.bind(O(e)),e}return t=u,(n=[{key:"componentDidMount",value:function(){this.loadData()}},{key:"loadData",value:function(){var e=this;fetch("/api/employees").then((function(e){return e.json()})).then((function(t){console.log("Total count of employees:",t.count),t.employees.forEach((function(e){e.dateHired=new Date(e.dateHired)})),e.setState({employees:t.employees})})).catch((function(e){console.log(e)}))}},{key:"createEmployee",value:function(e){var t=this;fetch("/api/employees",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)}).then((function(e){return e.json()})).then((function(e){e.employee.dateHired=new Date(e.employee.dateHired);var n=t.state.employees.concat(e.employee);t.setState({employees:n}),console.log("Total count of employees:",n.length)})).catch((function(e){console.log(e)}))}},{key:"deleteEmployee",value:function(e){var t=this;fetch("/api/employees/".concat(e),{method:"DELETE"}).then((function(e){e.ok?t.loadData():console.log("Failed to delete employee.")}))}},{key:"render",value:function(){return r.createElement(r.Fragment,null,r.createElement("h1",null,"Employee Management Application"),r.createElement(c,null),r.createElement("hr",null),r.createElement(j,{employees:this.state.employees,deleteEmployee:this.deleteEmployee}),r.createElement("hr",null),r.createElement(d,{createEmployee:this.createEmployee}))}}])&&E(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),u}(r.Component);function P(){return r.createElement("div",null,r.createElement("h1",null,"This is a placeholder for the employee report."))}function x(e){return x="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},x(e)}function _(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function T(e,t){return T=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},T(e,t)}function k(e,t){if(t&&("object"===x(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return D(e)}function D(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function A(e){return A=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},A(e)}var R=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&T(e,t)}(u,e);var t,n,o,l,a=(o=u,l=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=A(o);if(l){var n=A(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return k(this,e)});function u(){var e;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(e=a.call(this)).state={employee:[]},e.handleSubmit=e.handleSubmit.bind(D(e)),e}return t=u,(n=[{key:"componentDidMount",value:function(){this.loadData()}},{key:"loadData",value:function(){var e=this,t=window.location.pathname.split("/")[2];fetch("/api/employees/".concat(t)).then((function(e){return e.json()})).then((function(t){t.employee.dateHired=new Date(t.employee.dateHired),e.setState({employee:t.employee})})).catch((function(e){console.log(e)}))}},{key:"handleSubmit",value:function(e){e.preventDefault();var t=document.forms.employeeUpdate,n=t.id.value,r=t.name.value,o=t.extension.value,l=t.email.value,a=t.title.value,u=t.currentlyEmployed.checked,c="/api/employees/".concat(n);fetch(c,{method:"PATCH",headers:{Accept:"application/json","Content-Type":"application/json;charset=UTF-8"},body:JSON.stringify({name:r,extension:o,email:l,title:a,currentlyEmployed:u})}).then((function(e){return e.json()})).then((function(e){document.getElementById("message").innerHTML=e.msg}))}},{key:"render",value:function(){return r.createElement("form",{name:"employeeUpdate",onSubmit:this.handleSubmit},r.createElement("h1",null,"Edit ",this.state.employee.name),"ID:",r.createElement("br",null),r.createElement("input",{type:"text",name:"id",readOnly:"readOnly",defaultValue:this.state.employee._id}),r.createElement("br",null),"Name:",r.createElement("br",null),r.createElement("input",{type:"text",name:"name",defaultValue:this.state.employee.name}),r.createElement("br",null),"Extension:",r.createElement("br",null),r.createElement("input",{type:"text",name:"extension",defaultValue:this.state.employee.extension}),r.createElement("br",null),"Email:",r.createElement("br",null),r.createElement("input",{type:"text",name:"email",defaultValue:this.state.employee.email}),r.createElement("br",null),"Title:",r.createElement("br",null),r.createElement("input",{type:"text",name:"title",defaultValue:this.state.employee.title}),r.createElement("br",null),"Date Hired:",r.createElement("br",null),r.createElement("input",{type:"text",name:"dateHired",readOnly:"readOnly",defaultValue:this.state.employee.dateHired}),r.createElement("br",null),"Currently Employed?",r.createElement("br",null),r.createElement("input",{type:"checkbox",name:"currentlyEmployed",defaultChecked:this.state.employee.currentlyEmployed}),r.createElement("br",null),r.createElement("br",null),r.createElement("br",null),r.createElement("input",{type:"submit",value:"Update"}),r.createElement("p",{id:"message"}))}}])&&_(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),u}(r.Component);function C(){var e=function(){return r.createElement("h1",null,"Page Not Found")};return r.createElement(a.Z5,null,r.createElement(a.AW,{path:"/employees",element:r.createElement(S,null)}),r.createElement(a.AW,{path:"/edit/:id",element:r.createElement(R,null)}),r.createElement(a.AW,{path:"/report",element:r.createElement(P,null)}),r.createElement(a.AW,{path:"/",element:r.createElement(a.Fg,{replace:!0,to:"/employees"})}),r.createElement(a.AW,{path:"*",element:r.createElement(e,null)}))}function H(){var e=function(){return r.createElement("span",null," | ")};return r.createElement("nav",null,r.createElement(l.OL,{end:!0,to:"/"},"Home"),r.createElement(e,null),r.createElement(l.OL,{to:"/employees"},"All Employees"),r.createElement(e,null),r.createElement(l.OL,{to:"/report"},"Reports"))}function N(){return r.createElement("div",null,r.createElement(H,null),r.createElement(C,null))}(0,o.s)(document.getElementById("content")).render(r.createElement(l.VK,null,r.createElement(r.StrictMode,null,r.createElement(N,null))))}},o={};function l(e){var t=o[e];if(void 0!==t)return t.exports;var n=o[e]={exports:{}};return r[e](n,n.exports,l),n.exports}l.m=r,e=[],l.O=(t,n,r,o)=>{if(!n){var a=1/0;for(m=0;m<e.length;m++){for(var[n,r,o]=e[m],u=!0,c=0;c<n.length;c++)(!1&o||a>=o)&&Object.keys(l.O).every((e=>l.O[e](n[c])))?n.splice(c--,1):(u=!1,o<a&&(a=o));if(u){e.splice(m--,1);var i=r();void 0!==i&&(t=i)}}return t}o=o||0;for(var m=e.length;m>0&&e[m-1][2]>o;m--)e[m]=e[m-1];e[m]=[n,r,o]},n=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,l.t=function(e,r){if(1&r&&(e=this(e)),8&r)return e;if("object"==typeof e&&e){if(4&r&&e.__esModule)return e;if(16&r&&"function"==typeof e.then)return e}var o=Object.create(null);l.r(o);var a={};t=t||[null,n({}),n([]),n(n)];for(var u=2&r&&e;"object"==typeof u&&!~t.indexOf(u);u=n(u))Object.getOwnPropertyNames(u).forEach((t=>a[t]=()=>e[t]));return a.default=()=>e,l.d(o,a),o},l.d=(e,t)=>{for(var n in t)l.o(t,n)&&!l.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},l.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),l.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{var e={624:0};l.O.j=t=>0===e[t];var t=(t,n)=>{var r,o,[a,u,c]=n,i=0;if(a.some((t=>0!==e[t]))){for(r in u)l.o(u,r)&&(l.m[r]=u[r]);if(c)var m=c(l)}for(t&&t(n);i<a.length;i++)o=a[i],l.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return l.O(m)},n=self.webpackChunkmodule01=self.webpackChunkmodule01||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))})();var a=l.O(void 0,[736],(()=>l(295)));a=l.O(a)})();
//# sourceMappingURL=employees.bundle.js.map