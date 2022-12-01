export {}
// primitives
let user_name:string = "Ali";
let age:number = 24;
let phone:number =3419169031;
let is_passed:boolean = true;

// array
let subjects: string[] = ['english', 'urdu', 'computer'];
let marks: number[] = [55, 77, 99];
let details: object[] =[
    {name: 'English'},
    {name: 'Urdu'},
    {name: 'Computer'}
]

let anyArr:any[] = [];

anyArr.push("Mateen");
anyArr.push(24);
anyArr.push(true);
anyArr.push('23');

let person: (string|number|boolean)[]=[]

person.push("Mateen2");
person.push("Torkhow");
person.push("Chitral");
person.push(true);
person.push(3419169031);

// tuples
let tuples_test: [string,number,boolean] = ["Saleem",23,true];
tuples_test[0] ="342";
tuples_test[1] =32322;
tuples_test[2] =true;


// objects
let personObject : {
    name:string,
    location:string,
    is_programmer:boolean
}

personObject = {
    name:"mateen",
    location:"Chitral",
    is_programmer:true
}

personObject.is_programmer=true;

// interface

interface Person {
    name:string;
    age:number;
    marks:number;
}

let person1:Person ={
    name:"Ali",
    age:21,
    marks:550
}
let person2:Person ={
    name:"Saleem",
    age:25,
    marks:650
}
let person3:Person ={
    name:"Ahmad",
    age:43,
    marks:750
}


interface Speech{
    sayHi(name:string):string;
    sayBye:(name:string)=>string
}

let greetingMsg:Speech ={
    sayHi:function(name:string){
      return `Hello ${name}`;
    },
    sayBye:(name:string)=>`Goodbye ${name}`
}






console.log('====================================');

// interface
console.log(greetingMsg.sayHi("Mateen"));
console.log(greetingMsg.sayBye("Mateen"));

console.log("Person1 :"+person1);
console.log("Person2 :"+person2);
console.log("Person3 :"+person3);

// objects
console.log("Person Object: " + personObject);

// primitives
console.log("user_name=" + user_name);
console.log("age= "+age);
console.log("phone= "+phone);
console.log("passed exam= "+is_passed);
// array
console.log("Subject= "+subjects);
console.log("marks= "+marks);
console.log("details= "+details);
console.log("anyArr= "+anyArr);
console.log("person= "+person);
// tuples
console.log("tuples_test= "+tuples_test);

console.log('====================================');