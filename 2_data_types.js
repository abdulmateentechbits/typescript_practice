"use strict";
exports.__esModule = true;
// primitives
var user_name = "Ali";
var age = 24;
var phone = 3419169031;
var is_passed = true;
// array
var subjects = ['english', 'urdu', 'computer'];
var marks = [55, 77, 99];
var details = [
    { name: 'English' },
    { name: 'Urdu' },
    { name: 'Computer' }
];
var anyArr = [];
anyArr.push("Mateen");
anyArr.push(24);
anyArr.push(true);
anyArr.push('23');
var person = [];
person.push("Mateen2");
person.push("Torkhow");
person.push("Chitral");
person.push(true);
person.push(3419169031);
// tuples
var tuples_test = ["Saleem", 23, true];
tuples_test[0] = "342";
tuples_test[1] = 32322;
tuples_test[2] = true;
// objects
var personObject;
personObject = {
    name: "mateen",
    location: "Chitral",
    is_programmer: true
};
personObject.is_programmer = true;
var person1 = {
    name: "Ali",
    age: 21,
    marks: 550
};
var person2 = {
    name: "Saleem",
    age: 25,
    marks: 650
};
var person3 = {
    name: "Ahmad",
    age: 43,
    marks: 750
};
var greetingMsg = {
    sayHi: function (name) {
        return "Hello ".concat(name);
    },
    sayBye: function (name) { return "Goodbye ".concat(name); }
};
console.log('====================================');
// interface
console.log(greetingMsg.sayHi("Mateen"));
console.log(greetingMsg.sayBye("Mateen"));
console.log("Person1 :" + person1);
console.log("Person2 :" + person2);
console.log("Person3 :" + person3);
// objects
console.log("Person Object: " + personObject);
// primitives
console.log("user_name=" + user_name);
console.log("age= " + age);
console.log("phone= " + phone);
console.log("passed exam= " + is_passed);
// array
console.log("Subject= " + subjects);
console.log("marks= " + marks);
console.log("details= " + details);
console.log("anyArr= " + anyArr);
console.log("person= " + person);
// tuples
console.log("tuples_test= " + tuples_test);
console.log('====================================');
