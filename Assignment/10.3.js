var i=0;
var myfunc= setInterval(function(){
    document.write("Hello   World!"+"<br>");
    i++;
    if(i==5){
        clearInterval(myfunc)
    }
},3000);