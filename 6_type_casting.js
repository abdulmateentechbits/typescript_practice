"use strict";
exports.__esModule = true;
var link = document.querySelector('a');
var form = document.getElementById('submit-form');
form.addEventListener('submit', function (e) {
    e.preventDefault();
    console.log(e.target);
});
console.log('====================================');
console.log("form: " + form.method);
console.log("Link: " + link);
console.log('====================================');
