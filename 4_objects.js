"use strict";
exports.__esModule = true;
var std1 = {
    name: "Mateen",
    age: 24,
    email: "mateen@gmail.com",
    showResult: function (marks, exam) {
        return "Exam: ".concat(exam, " & Mark ").concat(marks);
    },
    greetMessage: function (msg) {
        return "Mateen ".concat(msg);
    },
    phone: 3419169031,
    address: "Chitral"
};
console.log("Std1: ", std1.name, " ", std1.age, " ", std1.email, " ", std1.showResult(500, "Annual"), std1.greetMessage("Hey you done an amazing job"));
var std2 = {
    name: "Ali",
    age: 24,
    email: "Ali@gmail.com",
    showResult: function (marks, exam) {
        return "Exam: ".concat(exam, " & Mark ").concat(marks);
    },
    greetMessage: function (msg) {
        return "Mateen ".concat(msg);
    },
    phone: 3419169031,
    address: "Chitral"
};
console.log("std2: ", std2.name, " ", std2.age, " ", std2.email, " ", std2.showResult(500, "First term"), std2.greetMessage("Hey you done an amazing job"));
