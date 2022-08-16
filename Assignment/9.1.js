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
