"use strict";
function varargs1(...args) {
    let sum1 = 0;
    for (let i = 0; i < args.length; i++) {
        sum1 += args[i];
    }
    return sum1;
}
let value = prompt("Enter length of arguments");
let value1 = parseInt(value);
let y = [];
for (let i = 0; i < value1; i++) {
    let mynumber = prompt("Enter number");
    console.log(mynumber);
    let num = parseInt(mynumber);
    y.push(num);
    console.log(y);
}
document.write("My sum is: " + varargs1(...y));
