export {}

interface hasFormatter {
  format():string;
}




class Person implements hasFormatter {
    constructor(public username:string,protected password:string){}
    format(): string {
        return this.username.toLocaleLowerCase();
    }
}

let person1:hasFormatter;
let person2:hasFormatter;

person1 = new Person("MATEEN","admin");

console.log(person1.format());

person2 = new Person("Test","user");

let people:hasFormatter[]=[];

people.push(person1);
people.push(person2);

console.log(people);

