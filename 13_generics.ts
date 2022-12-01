export {}

interface hasLength{
    length: number;
}

let arr = [
    "this string has a length property",
    ['thi','string','has','length'],
    {material:'plastic',length:40}
]

function  logLength <T extends hasLength>(a:T[]){
    a.forEach(element => {
        console.log(element.length);        
    });

}


logLength(arr)






// const addID = (obj:object)=>{
//     let id = Math.floor(Math.random() * 100);
//     return {id,...obj}
// }

// let person1 = addID({name:"mateen",age:24})
// console.log(person1.id);


// const addID = <T extends {name:string,age:number}>(obj:T)=>{
//     let id = Math.floor(Math.random() * 100);
//     return {id,...obj}
// }

// let person1 = addID({name:"mateen",age:24})
// let person2 = addID({name:"test",age:33})
// let person3 = addID({name:"test3",age:11});


// console.log(person1.id);
// console.log(person1.name);
// console.log(person1.age);

// console.log(person2.id);
// console.log(person2.name);

// console.log(person3.id);
// console.log(person3.name);


