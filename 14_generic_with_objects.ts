export {}

// interface Person<T> {
//     name:string;
//     age:number;
//     document:T
// }

// const person1:Person<number[]> = {
//  name: 'John',
//  age: 40,
//  document:[233,23,2323,34434,233232,2232]
// }

// console.log(person1);

interface User<Gender>{
    name:string;
    age:number;
    nid:string;
    gender:Gender;
}



let user1:User<string[]> = {
    name: "John",
    age:23,
    nid:"152020-4155140-6",
    gender:["male", "female"]

}

let user2:User<string> = {
    name: "John",
    age:23,
    nid:"152020-4155140-6",
    gender:"male"

}

console.log(user1);
console.log(user2);













