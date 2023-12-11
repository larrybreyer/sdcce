/*! For license information please see employees.bundle.js.LICENSE.txt */
(()=>{"use strict";var e,t,r,n={2295:(e,t,r)=>{var n=r(7294),o=r(745),a=r(9655),i=r(4079),l=r(2459),c=r(9250),u=r(6025),s=r(7977),f=r(5147),m=r(5005),p=r(1881);function h(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function y(){var e,t,r=(0,c.s0)(),o=(e=(0,a.lr)(),t=1,function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,a=[],i=!0,l=!1;try{for(r=r.call(e);!(i=(n=r.next()).done)&&(a.push(n.value),!t||a.length!==t);i=!0);}catch(e){l=!0,o=e}finally{try{i||null==r.return||r.return()}finally{if(l)throw o}}return a}}(e,t)||function(e,t){if(e){if("string"==typeof e)return h(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?h(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}())[0];return n.createElement(u.Z,null,n.createElement(u.Z.Header,{as:"h5"},"Filter"),n.createElement(u.Z.Body,null,n.createElement(u.Z.Text,null,"Currently Employed:"," ",n.createElement("select",{value:o.get("employed")||"",onChange:function(e){return r(e.target.value?"/employees?employed=".concat(e.target.value):"/employees")}},n.createElement("option",{value:""},"All"),n.createElement("option",{value:"true"},"Employed"),n.createElement("option",{value:"false"},"Not Employed")))))}var d=r(682),v=r(4051),E=r(1555);function g(e){return g="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},g(e)}function b(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function w(e,t){return w=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},w(e,t)}function x(e,t){if(t&&("object"===g(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return O(e)}function O(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function Z(e){return Z=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},Z(e)}var j=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&w(e,t)}(l,e);var t,r,o,a,i=(o=l,a=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=Z(o);if(a){var r=Z(this).constructor;e=Reflect.construct(t,arguments,r)}else e=t.apply(this,arguments);return x(this,e)});function l(){var e;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,l),(e=i.call(this)).state={modalVisible:!1},e.handleSubmit=e.handleSubmit.bind(O(e)),e.handleShowModal=e.handleShowModal.bind(O(e)),e.handleHideModal=e.handleHideModal.bind(O(e)),e}return t=l,(r=[{key:"handleShowModal",value:function(){this.setState({modalVisible:!0})}},{key:"handleHideModal",value:function(){this.setState({modalVisible:!1})}},{key:"handleSubmit",value:function(e){var t=document.forms.employeeAdd,r={name:t.name.value,extension:t.ext.value,email:t.email.value,title:t.title.value};this.props.createEmployee(r),t.name.value="",t.ext.value="",t.email.value="",t.title.value="",this.setState({modalVisible:!1})}},{key:"render",value:function(){return n.createElement(n.Fragment,null,n.createElement("div",{className:"addEmployee"},n.createElement(m.Z,{variant:"primary",size:"sm",onClick:this.handleShowModal},"New Employee")),n.createElement(p.Z,{show:this.state.modalVisible,onHide:this.handleHideModal,centered:!0},n.createElement(p.Z.Header,{closeButton:!0},n.createElement(p.Z.Title,null,"Add New Employee")),n.createElement(p.Z.Body,null,n.createElement(d.Z,{fluid:!0},n.createElement("form",{name:"employeeAdd"},n.createElement(v.Z,null,n.createElement(E.Z,{md:3},"Name:"),n.createElement(E.Z,{md:"auto"},n.createElement("input",{type:"text",name:"name"}))),n.createElement(v.Z,null,n.createElement(E.Z,{md:3},"Extension:"),n.createElement(E.Z,{md:"auto"},n.createElement("input",{type:"text",name:"ext",maxLength:4}))),n.createElement(v.Z,null,n.createElement(E.Z,{md:3},"Email:"),n.createElement(E.Z,{md:"auto"},n.createElement("input",{type:"text",name:"email"}))),n.createElement(v.Z,null,n.createElement(E.Z,{md:3},"Title:"),n.createElement(E.Z,{md:"auto"},n.createElement("input",{type:"text",name:"title"})))))),n.createElement(p.Z.Footer,null,n.createElement(m.Z,{type:"submit",variant:"success",size:"sm",className:"mt-4",onClick:this.handleSubmit},"Add Employee"))))}}])&&b(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),l}(n.Component);function S(e){return S="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},S(e)}function L(){L=function(){return e};var e={},t=Object.prototype,r=t.hasOwnProperty,n="function"==typeof Symbol?Symbol:{},o=n.iterator||"@@iterator",a=n.asyncIterator||"@@asyncIterator",i=n.toStringTag||"@@toStringTag";function l(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{l({},"")}catch(e){l=function(e,t,r){return e[t]=r}}function c(e,t,r,n){var o=t&&t.prototype instanceof f?t:f,a=Object.create(o.prototype),i=new O(n||[]);return a._invoke=function(e,t,r){var n="suspendedStart";return function(o,a){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw a;return{value:void 0,done:!0}}for(r.method=o,r.arg=a;;){var i=r.delegate;if(i){var l=b(i,r);if(l){if(l===s)continue;return l}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var c=u(e,t,r);if("normal"===c.type){if(n=r.done?"completed":"suspendedYield",c.arg===s)continue;return{value:c.arg,done:r.done}}"throw"===c.type&&(n="completed",r.method="throw",r.arg=c.arg)}}}(e,r,i),a}function u(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(e){return{type:"throw",arg:e}}}e.wrap=c;var s={};function f(){}function m(){}function p(){}var h={};l(h,o,(function(){return this}));var y=Object.getPrototypeOf,d=y&&y(y(Z([])));d&&d!==t&&r.call(d,o)&&(h=d);var v=p.prototype=f.prototype=Object.create(h);function E(e){["next","throw","return"].forEach((function(t){l(e,t,(function(e){return this._invoke(t,e)}))}))}function g(e,t){function n(o,a,i,l){var c=u(e[o],e,a);if("throw"!==c.type){var s=c.arg,f=s.value;return f&&"object"==S(f)&&r.call(f,"__await")?t.resolve(f.__await).then((function(e){n("next",e,i,l)}),(function(e){n("throw",e,i,l)})):t.resolve(f).then((function(e){s.value=e,i(s)}),(function(e){return n("throw",e,i,l)}))}l(c.arg)}var o;this._invoke=function(e,r){function a(){return new t((function(t,o){n(e,r,t,o)}))}return o=o?o.then(a,a):a()}}function b(e,t){var r=e.iterator[t.method];if(void 0===r){if(t.delegate=null,"throw"===t.method){if(e.iterator.return&&(t.method="return",t.arg=void 0,b(e,t),"throw"===t.method))return s;t.method="throw",t.arg=new TypeError("The iterator does not provide a 'throw' method")}return s}var n=u(r,e.iterator,t.arg);if("throw"===n.type)return t.method="throw",t.arg=n.arg,t.delegate=null,s;var o=n.arg;return o?o.done?(t[e.resultName]=o.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,s):o:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,s)}function w(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function x(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function O(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(w,this),this.reset(!0)}function Z(e){if(e){var t=e[o];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var n=-1,a=function t(){for(;++n<e.length;)if(r.call(e,n))return t.value=e[n],t.done=!1,t;return t.value=void 0,t.done=!0,t};return a.next=a}}return{next:j}}function j(){return{value:void 0,done:!0}}return m.prototype=p,l(v,"constructor",p),l(p,"constructor",m),m.displayName=l(p,i,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===m||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,p):(e.__proto__=p,l(e,i,"GeneratorFunction")),e.prototype=Object.create(v),e},e.awrap=function(e){return{__await:e}},E(g.prototype),l(g.prototype,a,(function(){return this})),e.AsyncIterator=g,e.async=function(t,r,n,o,a){void 0===a&&(a=Promise);var i=new g(c(t,r,n,o),a);return e.isGeneratorFunction(r)?i:i.next().then((function(e){return e.done?e.value:i.next()}))},E(v),l(v,i,"Generator"),l(v,o,(function(){return this})),l(v,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var t=[];for(var r in e)t.push(r);return t.reverse(),function r(){for(;t.length;){var n=t.pop();if(n in e)return r.value=n,r.done=!1,r}return r.done=!0,r}},e.values=Z,O.prototype={constructor:O,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(x),!e)for(var t in this)"t"===t.charAt(0)&&r.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function n(r,n){return i.type="throw",i.arg=e,t.next=r,n&&(t.method="next",t.arg=void 0),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],i=a.completion;if("root"===a.tryLoc)return n("end");if(a.tryLoc<=this.prev){var l=r.call(a,"catchLoc"),c=r.call(a,"finallyLoc");if(l&&c){if(this.prev<a.catchLoc)return n(a.catchLoc,!0);if(this.prev<a.finallyLoc)return n(a.finallyLoc)}else if(l){if(this.prev<a.catchLoc)return n(a.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return n(a.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===e||"continue"===e)&&a.tryLoc<=t&&t<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=e,i.arg=t,a?(this.method="next",this.next=a.finallyLoc,s):this.complete(i)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),s},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),x(r),s}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var o=n.arg;x(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,r){return this.delegate={iterator:Z(e),resultName:t,nextLoc:r},"next"===this.method&&(this.arg=void 0),s}},e}function _(e,t,r,n,o,a,i){try{var l=e[a](i),c=l.value}catch(e){return void r(e)}l.done?t(c):Promise.resolve(c).then(n,o)}function k(e){return function(){var t=this,r=arguments;return new Promise((function(n,o){var a=e.apply(t,r);function i(e){_(a,n,o,i,l,"next",e)}function l(e){_(a,n,o,i,l,"throw",e)}i(void 0)}))}}function P(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function T(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function A(e,t,r){return t&&T(e.prototype,t),r&&T(e,r),Object.defineProperty(e,"prototype",{writable:!1}),e}function N(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&C(e,t)}function C(e,t){return C=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},C(e,t)}function H(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=D(e);if(t){var o=D(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return M(this,r)}}function M(e,t){if(t&&("object"===S(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return F(e)}function F(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function D(e){return D=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},D(e)}function V(e){var t=(0,c.TH)().search,r=new URLSearchParams(t).get("employed"),o=e.employees.filter((function(e){return!r||String(e.currentlyEmployed)===r})).map((function(t){return n.createElement(G,{key:t._id,employee:t,deleteEmployee:e.deleteEmployee})}));return n.createElement(u.Z,null,n.createElement(u.Z.Header,{as:"h5"},"All Employees ",n.createElement(s.Z,{bg:"secondary"},o.length)),n.createElement(u.Z.Body,null,n.createElement(u.Z.Text,null,n.createElement(f.Z,{striped:!0,size:"sm"},n.createElement("thead",null,n.createElement("tr",null,n.createElement("th",null,"Name"),n.createElement("th",null,"Extension"),n.createElement("th",null,"Email"),n.createElement("th",null,"Title"),n.createElement("th",null,"Date Hired"),n.createElement("th",null,"Currently Employed?"),n.createElement("th",null))),n.createElement("tbody",null,o)))))}var G=function(e){N(r,e);var t=H(r);function r(){var e;return P(this,r),(e=t.call(this)).state={modalVisible:!1},e.toggleModal=e.toggleModal.bind(F(e)),e.handleDelete=e.handleDelete.bind(F(e)),e}return A(r,[{key:"handleDelete",value:function(){this.props.deleteEmployee(this.props.employee._id),this.setState({modalVisible:!1})}},{key:"toggleModal",value:function(){this.setState({modalVisible:!this.state.modalVisible})}},{key:"render",value:function(){return n.createElement("tr",null,n.createElement("td",null,n.createElement(a.rU,{to:"/edit/".concat(this.props.employee._id)},this.props.employee.name)),n.createElement("td",null,this.props.employee.extension),n.createElement("td",null,this.props.employee.email),n.createElement("td",null,this.props.employee.title),n.createElement("td",null,this.props.employee.dateHired.toDateString()),n.createElement("td",null,this.props.employee.currentlyEmployed?"Yes":"No"),n.createElement("td",null,n.createElement(m.Z,{variant:"danger",size:"sm",onClick:this.toggleModal},"X"),n.createElement(p.Z,{show:this.state.modalVisible,onHide:this.toggleModal,centered:!0},n.createElement(p.Z.Header,{closeButton:!0},n.createElement(p.Z.Title,null,"Delete Employee?")),n.createElement(p.Z.Body,null,"Are you sure you want to delete this employee?"),n.createElement(p.Z.Footer,null,n.createElement(m.Z,{type:"submit",variant:"danger",className:"mt-4",onClick:this.toggleModal},"Cancel"),n.createElement(m.Z,{type:"submit",variant:"success",className:"mt-4",onClick:this.handleDelete},"Yes")))))}}]),r}(n.Component),B=function(e){N(i,e);var t,r,o,a=H(i);function i(){var e;return P(this,i),(e=a.call(this)).state={employees:[]},e.createEmployee=e.createEmployee.bind(F(e)),e.deleteEmployee=e.deleteEmployee.bind(F(e)),e}return A(i,[{key:"componentDidMount",value:function(){this.loadData()}},{key:"loadData",value:(o=k(L().mark((function e(){var t,r;return L().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/api/employees");case 2:return t=e.sent,e.next=5,t.json();case 5:(r=e.sent).employees.forEach((function(e){e.dateHired=new Date(e.dateHired)})),this.setState({employees:r.employees});case 8:case"end":return e.stop()}}),e,this)}))),function(){return o.apply(this,arguments)})},{key:"createEmployee",value:(r=k(L().mark((function e(t){var r,n,o;return L().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/api/employees",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)});case 2:return r=e.sent,e.next=5,r.json();case 5:(n=e.sent).employee.dateHired=new Date(n.employee.dateHired),o=this.state.employees.concat(n.employee),this.setState({employees:o});case 9:case"end":return e.stop()}}),e,this)}))),function(e){return r.apply(this,arguments)})},{key:"deleteEmployee",value:(t=k(L().mark((function e(t){return L().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/api/employees/".concat(t),{method:"DELETE"});case 2:e.sent.ok?this.loadData():console.log("Failed to delete employee.");case 4:case"end":return e.stop()}}),e,this)}))),function(e){return t.apply(this,arguments)})},{key:"render",value:function(){return n.createElement(n.Fragment,null,n.createElement(j,{createEmployee:this.createEmployee}),n.createElement(y,null),n.createElement(V,{employees:this.state.employees,deleteEmployee:this.deleteEmployee}))}}]),i}(n.Component);function I(){return n.createElement(u.Z,null,n.createElement(u.Z.Header,{as:"h5"},"Filter"),n.createElement(u.Z.Body,null,n.createElement(u.Z.Text,null,"This is a placeholder for employee reports.")))}var R=r(8375);function U(e){return U="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},U(e)}function Y(){Y=function(){return e};var e={},t=Object.prototype,r=t.hasOwnProperty,n="function"==typeof Symbol?Symbol:{},o=n.iterator||"@@iterator",a=n.asyncIterator||"@@asyncIterator",i=n.toStringTag||"@@toStringTag";function l(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{l({},"")}catch(e){l=function(e,t,r){return e[t]=r}}function c(e,t,r,n){var o=t&&t.prototype instanceof f?t:f,a=Object.create(o.prototype),i=new O(n||[]);return a._invoke=function(e,t,r){var n="suspendedStart";return function(o,a){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw a;return{value:void 0,done:!0}}for(r.method=o,r.arg=a;;){var i=r.delegate;if(i){var l=b(i,r);if(l){if(l===s)continue;return l}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var c=u(e,t,r);if("normal"===c.type){if(n=r.done?"completed":"suspendedYield",c.arg===s)continue;return{value:c.arg,done:r.done}}"throw"===c.type&&(n="completed",r.method="throw",r.arg=c.arg)}}}(e,r,i),a}function u(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(e){return{type:"throw",arg:e}}}e.wrap=c;var s={};function f(){}function m(){}function p(){}var h={};l(h,o,(function(){return this}));var y=Object.getPrototypeOf,d=y&&y(y(Z([])));d&&d!==t&&r.call(d,o)&&(h=d);var v=p.prototype=f.prototype=Object.create(h);function E(e){["next","throw","return"].forEach((function(t){l(e,t,(function(e){return this._invoke(t,e)}))}))}function g(e,t){function n(o,a,i,l){var c=u(e[o],e,a);if("throw"!==c.type){var s=c.arg,f=s.value;return f&&"object"==U(f)&&r.call(f,"__await")?t.resolve(f.__await).then((function(e){n("next",e,i,l)}),(function(e){n("throw",e,i,l)})):t.resolve(f).then((function(e){s.value=e,i(s)}),(function(e){return n("throw",e,i,l)}))}l(c.arg)}var o;this._invoke=function(e,r){function a(){return new t((function(t,o){n(e,r,t,o)}))}return o=o?o.then(a,a):a()}}function b(e,t){var r=e.iterator[t.method];if(void 0===r){if(t.delegate=null,"throw"===t.method){if(e.iterator.return&&(t.method="return",t.arg=void 0,b(e,t),"throw"===t.method))return s;t.method="throw",t.arg=new TypeError("The iterator does not provide a 'throw' method")}return s}var n=u(r,e.iterator,t.arg);if("throw"===n.type)return t.method="throw",t.arg=n.arg,t.delegate=null,s;var o=n.arg;return o?o.done?(t[e.resultName]=o.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,s):o:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,s)}function w(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function x(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function O(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(w,this),this.reset(!0)}function Z(e){if(e){var t=e[o];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var n=-1,a=function t(){for(;++n<e.length;)if(r.call(e,n))return t.value=e[n],t.done=!1,t;return t.value=void 0,t.done=!0,t};return a.next=a}}return{next:j}}function j(){return{value:void 0,done:!0}}return m.prototype=p,l(v,"constructor",p),l(p,"constructor",m),m.displayName=l(p,i,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===m||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,p):(e.__proto__=p,l(e,i,"GeneratorFunction")),e.prototype=Object.create(v),e},e.awrap=function(e){return{__await:e}},E(g.prototype),l(g.prototype,a,(function(){return this})),e.AsyncIterator=g,e.async=function(t,r,n,o,a){void 0===a&&(a=Promise);var i=new g(c(t,r,n,o),a);return e.isGeneratorFunction(r)?i:i.next().then((function(e){return e.done?e.value:i.next()}))},E(v),l(v,i,"Generator"),l(v,o,(function(){return this})),l(v,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var t=[];for(var r in e)t.push(r);return t.reverse(),function r(){for(;t.length;){var n=t.pop();if(n in e)return r.value=n,r.done=!1,r}return r.done=!0,r}},e.values=Z,O.prototype={constructor:O,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(x),!e)for(var t in this)"t"===t.charAt(0)&&r.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function n(r,n){return i.type="throw",i.arg=e,t.next=r,n&&(t.method="next",t.arg=void 0),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],i=a.completion;if("root"===a.tryLoc)return n("end");if(a.tryLoc<=this.prev){var l=r.call(a,"catchLoc"),c=r.call(a,"finallyLoc");if(l&&c){if(this.prev<a.catchLoc)return n(a.catchLoc,!0);if(this.prev<a.finallyLoc)return n(a.finallyLoc)}else if(l){if(this.prev<a.catchLoc)return n(a.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return n(a.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===e||"continue"===e)&&a.tryLoc<=t&&t<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=e,i.arg=t,a?(this.method="next",this.next=a.finallyLoc,s):this.complete(i)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),s},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),x(r),s}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var o=n.arg;x(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,r){return this.delegate={iterator:Z(e),resultName:t,nextLoc:r},"next"===this.method&&(this.arg=void 0),s}},e}function z(e,t,r,n,o,a,i){try{var l=e[a](i),c=l.value}catch(e){return void r(e)}l.done?t(c):Promise.resolve(c).then(n,o)}function W(e){return function(){var t=this,r=arguments;return new Promise((function(n,o){var a=e.apply(t,r);function i(e){z(a,n,o,i,l,"next",e)}function l(e){z(a,n,o,i,l,"throw",e)}i(void 0)}))}}function J(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,a=[],i=!0,l=!1;try{for(r=r.call(e);!(i=(n=r.next()).done)&&(a.push(n.value),!t||a.length!==t);i=!0);}catch(e){l=!0,o=e}finally{try{i||null==r.return||r.return()}finally{if(l)throw o}}return a}}(e,t)||function(e,t){if(e){if("string"==typeof e)return $(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?$(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function $(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function K(){var e=J((0,n.useState)(""),2),t=e[0],r=e[1],o=J((0,n.useState)({visibility:!1,msg:""}),2),a=o[0],i=o[1],l=(0,c.UO)().id;function s(){return(s=W(Y().mark((function e(){var t,n;return Y().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/api/employees/".concat(l));case 2:return t=e.sent,e.next=5,t.json();case 5:n=e.sent,r(n.employee);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function f(){return f=W(Y().mark((function e(t){var n,o,a,l;return Y().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),n=document.forms.employeeUpdate,o=n.id.value,e.next=5,fetch("/api/employees/".concat(o),{method:"PATCH",headers:{Accept:"application/json","Content-Type":"application/json;charset=UTF-8"},body:JSON.stringify({name:n.name.value,extension:n.extension.value,email:n.email.value,title:n.title.value,currentlyEmployed:n.currentlyEmployed.checked})});case 5:return a=e.sent,e.next=8,a.json();case 8:l=e.sent,r(l.employee),i({visibility:!0,msg:l.msg});case 11:case"end":return e.stop()}}),e)}))),f.apply(this,arguments)}return(0,n.useEffect)((function(){!function(){s.apply(this,arguments)}()}),[]),n.createElement(u.Z,null,n.createElement(u.Z.Header,{as:"h5"},"Edit ",t.name),n.createElement(u.Z.Body,null,n.createElement(u.Z.Text,null,n.createElement(d.Z,{fluid:!0},n.createElement("form",{name:"employeeUpdate",onSubmit:function(e){return f.apply(this,arguments)}},n.createElement(v.Z,null,n.createElement(E.Z,{md:2},"ID:"),n.createElement(E.Z,{md:"auto"},n.createElement("input",{type:"text",name:"id",readOnly:"readOnly",defaultValue:t._id}))),n.createElement(v.Z,null,n.createElement(E.Z,{md:2},"Name:"),n.createElement(E.Z,{md:"auto"},n.createElement("input",{type:"text",name:"name",defaultValue:t.name}))),n.createElement(v.Z,null,n.createElement(E.Z,{md:2},"Extension:"),n.createElement(E.Z,{md:"auto"},n.createElement("input",{type:"text",name:"extension",defaultValue:t.extension}))),n.createElement(v.Z,null,n.createElement(E.Z,{md:2},"Email:"),n.createElement(E.Z,{md:"auto"},n.createElement("input",{type:"text",name:"email",defaultValue:t.email}))),n.createElement(v.Z,null,n.createElement(E.Z,{md:2},"Title:"),n.createElement(E.Z,{md:"auto"},n.createElement("input",{type:"text",name:"title",defaultValue:t.title}))),n.createElement(v.Z,null,n.createElement(E.Z,{md:2},"Date Hired:"),n.createElement(E.Z,{md:"auto"},n.createElement("input",{type:"text",name:"dateHired",readOnly:"readOnly",defaultValue:t.dateHired}))),n.createElement(v.Z,null,n.createElement(E.Z,{md:2},"Currently Employed?"),n.createElement(E.Z,{md:"auto"},n.createElement("input",{type:"checkbox",name:"currentlyEmployed",defaultChecked:t.currentlyEmployed}))),n.createElement(m.Z,{type:"submit",variant:"primary",size:"sm",className:"my-3"},"Update Employee"),n.createElement(R.Z,{variant:"success",show:a.visibility,onClose:function(e){return i({visibility:!1})},dismissible:!0},a.msg))))))}function X(){var e=function(){return n.createElement("h1",null,"Page Not Found")};return n.createElement(c.Z5,null,n.createElement(c.AW,{path:"/employees",element:n.createElement(B,null)}),n.createElement(c.AW,{path:"/edit/:id",element:n.createElement(K,null)}),n.createElement(c.AW,{path:"/report",element:n.createElement(I,null)}),n.createElement(c.AW,{path:"/",element:n.createElement(c.Fg,{replace:!0,to:"/employees"})}),n.createElement(c.AW,{path:"*",element:n.createElement(e,null)}))}function q(){return n.createElement(i.Z,{bg:"dark",variant:"dark"},n.createElement(i.Z.Brand,{href:"/"},"Employee Management Application"),n.createElement(l.Z,null,n.createElement(l.Z.Link,{href:"/employees"},"All Employees"),n.createElement(l.Z.Link,{href:"/report"},"Reports")))}function Q(){return n.createElement("div",null,n.createElement(q,null),n.createElement(X,null))}(0,o.s)(document.getElementById("content")).render(n.createElement(a.VK,null,n.createElement(n.StrictMode,null,n.createElement(Q,null))))}},o={};function a(e){var t=o[e];if(void 0!==t)return t.exports;var r=o[e]={exports:{}};return n[e](r,r.exports,a),r.exports}a.m=n,e=[],a.O=(t,r,n,o)=>{if(!r){var i=1/0;for(s=0;s<e.length;s++){for(var[r,n,o]=e[s],l=!0,c=0;c<r.length;c++)(!1&o||i>=o)&&Object.keys(a.O).every((e=>a.O[e](r[c])))?r.splice(c--,1):(l=!1,o<i&&(i=o));if(l){e.splice(s--,1);var u=n();void 0!==u&&(t=u)}}return t}o=o||0;for(var s=e.length;s>0&&e[s-1][2]>o;s--)e[s]=e[s-1];e[s]=[r,n,o]},a.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return a.d(t,{a:t}),t},r=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,a.t=function(e,n){if(1&n&&(e=this(e)),8&n)return e;if("object"==typeof e&&e){if(4&n&&e.__esModule)return e;if(16&n&&"function"==typeof e.then)return e}var o=Object.create(null);a.r(o);var i={};t=t||[null,r({}),r([]),r(r)];for(var l=2&n&&e;"object"==typeof l&&!~t.indexOf(l);l=r(l))Object.getOwnPropertyNames(l).forEach((t=>i[t]=()=>e[t]));return i.default=()=>e,a.d(o,i),o},a.d=(e,t)=>{for(var r in t)a.o(t,r)&&!a.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},a.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),a.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),a.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{var e={624:0};a.O.j=t=>0===e[t];var t=(t,r)=>{var n,o,[i,l,c]=r,u=0;if(i.some((t=>0!==e[t]))){for(n in l)a.o(l,n)&&(a.m[n]=l[n]);if(c)var s=c(a)}for(t&&t(r);u<i.length;u++)o=i[u],a.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return a.O(s)},r=self.webpackChunkmodule01=self.webpackChunkmodule01||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})();var i=a.O(void 0,[736],(()=>a(2295)));i=a.O(i)})();
//# sourceMappingURL=employees.bundle.js.map