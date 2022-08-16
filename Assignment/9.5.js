function addString(str){
    var a=str;
    if(a.length<3){
        return a;
    }
    // console.log(a.length);
    var first=a.substring(0,3);
    var last=a.substring(a.length-3,a.length+1);
    var addString=first+last;
    document.write(addString+"<br>");
    if(addString.length>=3){
        return "We get good string";
    }

}
document.write(addString("hbgyvefy"));

