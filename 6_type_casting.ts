export {}

const link = document.querySelector('a') as HTMLAnchorElement;
const form = document.getElementById('submit-form') as HTMLFormElement;


form.addEventListener('submit',(e:Event)=>{
  e.preventDefault();
  console.log(e.target);
  
})

console.log('====================================');
console.log("form: " + form.method);
console.log("Link: " + link);
console.log('====================================');