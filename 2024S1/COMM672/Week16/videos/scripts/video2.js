/*
// $(document).ready(function(){ // The Ready Event
$(function(){ // The Ready Event
  $('h1').css('color','#069');
  alert('Hi there!');
});
*/

$(document).ready(function(){ // The Ready Event
  $('button').click(function(){
    $('p').text('Here is some brand new text!');
  });
});


/* vim: ft=javascript ai et ts=2 nu
*/
