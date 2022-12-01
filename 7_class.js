"use strict";
exports.__esModule = true;
// class Person{
//    readonly name:string;
//    private isCool:boolean;
//    public pets:number;
//    protected email:string;
//     constructor(a:string,b:boolean,c:number, d:string){
//         this.name = a;
//         this.isCool = b;
//         this.pets = c
//         this.email = d
//     }
//     sayHello(){
//         return `Hi my name is ${this.name} and ${this.isCool},  i have ${this.pets} number of pets`
//     }
// }
// let person1 = new Person("Mateen",true,12, "mateen@gmail.com");
// console.log(person1.sayHello());
// console.log(person1.name);
// console.log(person1.pets);
// console.log(person1.email);
var Person = /** @class */ (function () {
    function Person(name, isCool, email, pets) {
        this.name = name;
        this.isCool = isCool;
        this.email = email;
        this.pets = pets;
    }
    return Person;
}());
