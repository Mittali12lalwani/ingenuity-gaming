function addString(str){
    var a=str;
    if(a.length<3){
        return a;
    }
    // console.log(a.length);
    var first=a.substring(0,3);
    var last=a.substring(a.length-3,a.length+1);
    var addString=first+last;
    console.log(addString);
    if(addString.length>=3){
        return "We get good string";
    }

}
console.log(addString("hbgyvefy"));

