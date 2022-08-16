document.body.style.background="linear-gradient(90deg, rgba(180,293,168,1) 0%, rgba(182,182,221,1) 46%, rgba(148,187,233,1) 100%)";
document.body.style.fontFamily="italic";
document.body.style.fontSize="20px";
document.body.style.textAlign="center";
document.body.style.marginTop="150px";
document.body.style.textShadow="10px 10px 10px grey";
document.body.style.color="red";
function len(){
    // "Numbers to add are "+arguments.length;
    var s=0;
    var a=arguments.length;
    for(var i=0;i<a;i++){
        // var n=parseInt(prompt("Enter your number to add"));
        var n=arguments[i];
        
        s=s+n;
    }
    console.log(s);
    document.write(s+"<br>");
     
}
len(1,2,3,4);
len(1,2);
