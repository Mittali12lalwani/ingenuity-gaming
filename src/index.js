var heading1 = document.querySelector('h1');
heading1.innerText = "DOM manipulation using javascript";
// let anchor=document.querySelector('a') as HTMLAnchorElement;
// console.log(anchor.href);
// if(heading){
//     heading.innerHTML="Vani";
// }
console.log(heading1);
var input1 = document.getElementById('num1');
var input2 = document.getElementById('num2');
console.log(input1.value, input2.value);
var form = document.querySelector('.myForm');
form.addEventListener('submit', function (e) {
    e.preventDefault();
    var num1 = input1.valueAsNumber;
    // console.log(num1);
    // let num2=input2.valueAsNumber;
    var newp = document.createElement('p');
    var num2 = input2.valueAsNumber;
    var result = num1 + num2;
    // let result:number=input1.valueAsNumber+ input2.valueAsNumber;
    // newp.innerText=(input1.value+ +input2.value) as unknown as number;
    newp.innerText = result;
    form.appendChild(newp);
});
