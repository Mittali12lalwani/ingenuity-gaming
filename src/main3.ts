// let number2=prompt(`Enter a number`);

// let a:number=parseInt(number2);
// var arr2[];
// arr2.push(number2);


function varargs1(...args:number[]){
    let sum1=0;

    for(let i=0;i<args.length;i++){
        sum1+=args[i];
    }
    return sum1;
}
// varargs1(1,2,3);

let value:any=prompt("Enter length of arguments");
let value1=parseInt(value);
let y:number[]=[];
for(let i=0;i<value1;i++){
    let mynumber:any=prompt("Enter number");
    console.log(mynumber);
    let num=parseInt(mynumber);
    y.push(num);
    console.log(y);

}
document.write("My sum is: "+varargs1(...y));

// document.body.style.textAlign="center";
// document.body.style.color="white";
// document.body.style.fontSize="24px";

