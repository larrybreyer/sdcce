"use strict";

const $ = selector => document.querySelector(selector);

//  const focusAndSelect = selector => {
//      const elem = $(selector);
//      elem.focus();
//      elem.select();
//  };


const processEntries = () => {
  console.log("ID: " + $("#empid").value);
  console.log("Name: " + $("#name").value);
  console.log("Extension: " + $("#ext").value);
  console.log("Email: " + $("#email").value);
  console.log("Department: " + $("#department").value);
}

// document.addEventListener("click", processEntries);

//  const processEntries = () => {
//    console.log("ID: " + $("#empid").value);
//    console.log("Name: " + $("#name").value);
//    console.log("Extension: " + $("#ext").value);
//    console.log("Email: " + $("#email").value);
//    console.log("Department: " + $("#department").value);
//  }

document.addEventListener("DOMContentLoaded", () => {
    $("#submit").addEventListener("click", processEntries);
});


// vim: ai ts=2 et
