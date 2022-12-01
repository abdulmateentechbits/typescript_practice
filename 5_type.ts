export {}

type stringOrNumber = string | number;

type personObject ={
    name:string,
    id:stringOrNumber
}


const personObject1:personObject = {
    id:5,
    name:"Mateen",
}
const personObject2:personObject = {
    id:"5",
    name:"test",
}

console.log(personObject1);
console.log(personObject2);
