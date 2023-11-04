'use strict';
// HANDLE THE LOAD EVENT OF THE WINDOW

// SET WIDTH AND HEIGHT VARIABLES TO 800 x 700
let w = 900;
let h = 700;

// RESIZE THE POPUP TO THE SET WIDTH AND HEIGHT
// MOVE THE POPUP TO THE MIDDLE OF THE SCREEN
let l = (screen.availWidth -w) / 2;
let t = (screen.availHeight -h) / 2;
// OPEN THE ADD-EMPLOYEE.HTML PAGE WITHIN A POPUP
// let pos = 'width='+w+',height='+h+ ',top='+t+',left='+l;
let pos = 'width='+w+',height='+h;

const addEmployee = () => {
  const w = window.open('add-employee.html','addEmployee',pos);
}


// HANDLE THE CLICK EVENT FOR THE BTNADDEMPLOYEE BUTTON

const $ = selector => document.querySelector(selector);

document.addEventListener('DOMContentLoaded', () => {
    $('#btnAddEmployee').addEventListener('click', addEmployee);
});


// vim: ai ts=2 et
