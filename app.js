"use strict";
exports.__esModule = true;
var Demo = /** @class */ (function () {
    function Demo() {
    }
    Demo.prototype.test = function () {
        console.log('====================================');
        console.log("Welcome to the demo class function! hope it's working");
        console.log('====================================');
    };
    return Demo;
}());
var x = new Demo();
x.test();
