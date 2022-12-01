export {}

interface formData{
    name:string,
    age:number,
    email:string,
    showResult(marks:number,exam:string):string,
    greetMessage:(msg:string)=>string,
    phone:number,
    address:string    
}


let std1:formData = {
    name:"Mateen",
    age:24,
    email:"mateen@gmail.com",
    showResult:function(marks:number,exam:string){
        return `Exam: ${exam} & Mark ${marks}`
    },
    greetMessage:(msg:string)=>{
        return `Mateen ${msg}`
    },
    phone:3419169031,
    address:"Chitral"
}

console.log("Std1: " ,std1.name," ",std1.age," ",std1.email," ", std1.showResult(500,"Annual"),std1.greetMessage("Hey you done an amazing job"));

let std2:formData = {
    name:"Ali",
    age:24,
    email:"Ali@gmail.com",
    showResult:function(marks:number,exam:string){
        return `Exam: ${exam} & Mark ${marks}`
    },
    greetMessage:(msg:string)=>{
        return `Mateen ${msg}`
    },
    phone:3419169031,
    address:"Chitral"
}

console.log("std2: " ,std2.name," ",std2.age," ",std2.email," ", std2.showResult(500,"First term"),std2.greetMessage("Hey you done an amazing job"));

