var heading1=document.querySelector('h1') as HTMLHeadElement;
heading1.innerText="DOM manipulation using javascript";
// let anchor=document.querySelector('a') as HTMLAnchorElement;
// console.log(anchor.href);

// if(heading){
//     heading.innerHTML="Vani";
// }
console.log(heading1);

var input1=document.getElementById('num1') as HTMLInputElement;
var input2=document.getElementById('num2') as HTMLInputElement;
console.log(input1.value,input2.value);

var form=document.querySelector('.myForm') as HTMLFormElement;

form.addEventListener('submit',function(e:Event){
    e.preventDefault();
    let num1=input1.valueAsNumber;
    // console.log(num1);
    // let num2=input2.valueAsNumber;
    let newp=document.createElement('p');
    let num2=input2.valueAsNumber;
    let result:number=num1+num2;
    // let result:number=input1.valueAsNumber+ input2.valueAsNumber;
    // newp.innerText=(input1.value+ +input2.value) as unknown as number;
    newp.innerText=<string><unknown>result;
   
    form.appendChild(newp);

})

