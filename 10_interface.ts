export {}


interface greetMessage {
    greet:string;
    event:string;
    showGreet(word:string):void;
}



const greetMessage1:greetMessage = {
    greet:"Mateen",
    event:"Picnic",
    showGreet:(word)=>console.log(`Hello ${word}` )
}


greetMessage1.showGreet("Mateen")


// interface Person{
//     name:string;
//     age:number;
// }

// interface Eduction extends Person{
//     education:string
// }
// type Address = {
//     address:string;
// }
// type Experience = {
//     years:number;
// }

// type PersonProps = Address & Experience;





// function showPerson(person:PersonProps){
//     console.log(person);
    
// }

// showPerson({address:"Chitral",years:23})

// type Person ={
//     name:string,
// }

// interface Persons {
//    name:string;
// }


// interface Persons{
//     age:number;
// }

// const showPerson:Persons ={
//     name:"Mateen",
//     age:23,
// }

// console.log(showPerson);


















