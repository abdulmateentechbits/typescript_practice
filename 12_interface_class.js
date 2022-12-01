"use strict";
exports.__esModule = true;
var Person = /** @class */ (function () {
    function Person(username, password) {
        this.username = username;
        this.password = password;
    }
    Person.prototype.format = function () {
        return this.username.toLocaleLowerCase();
    };
    return Person;
}());
var person1;
var person2;
person1 = new Person("MATEEN", "admin");
console.log(person1.format());
person2 = new Person("Test", "user");
var people = [];
people.push(person1);
people.push(person2);
console.log(people);
