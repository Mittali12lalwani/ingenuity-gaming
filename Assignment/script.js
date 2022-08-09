//Assignment1

    var date =new Date();
    var day= date.getDate();
    var month=date.getMonth()+1;
    var year =date.getFullYear();
    document.write("Today Date:"+0+day+"/"+0+month+"/"+year);
    var weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    var day = weekday[date.getDay()];
    document.write("<br>Today Day:"+day);


// Assignment 2
    var name = window.prompt("Enter Your Name ");
        document.write("<br>"+"Your Name is =" + name);


//Assignment3
    const num1 = parseInt(prompt('Entre the first number'));
        const num2 = parseInt(prompt('Entre the second number'));
        const sum = num1+num2;
        document.write(`<br>The sum of ${num1} and ${num2} is ${sum}`);
        const multiplication = num1*num2;
        document.write(`<br>The multiplication of ${num1} and ${num2} is ${multiplication}`);
        const subtraction = num1-num2;
        document.write(`<br>The subtraction of ${num1} and ${num2} is ${subtraction}`);
        const division = num1/num2;
        document.write(`<br>The division of ${num1} and ${num2} is ${division}`);
        document.body.style.backgroundColor ="grey";
        document.body.style.textshadow ="black";
        document.body.style.color ="red";
        document.body.style.fontSize ="50px";
//Assignment4
        

//node Script.js
