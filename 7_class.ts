export {}

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





class Person {
    constructor(readonly name:string,private isCool:true, protected email:string, public pets:number){}
 
}





