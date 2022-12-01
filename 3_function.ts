export {}

// function greetingMsg(greet:string):string {
//     console.log(greet);
//     return `${greet} you done it`;    
// }



// const greetingMsg = (greet:string):string=>{
//     console.log(greet);    
//     return `Hey ${greet} you done it`;
// }


let greetingMsg : (name:string)=>void;

greetingMsg =(name)=>{
    console.log("Hello "+name);
    
}
greetingMsg("Mateen")

// greetingMsg("Hurry!, we won the match");
// greetingMsg("Hi ali i hope you were al right");

// console.log(greetingMsg("Sami"));
