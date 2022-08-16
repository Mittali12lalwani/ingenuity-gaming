function checkString(str){
    var s=str;
    if(s.substring(0,4)!="New!"){
        s="New!"+s;
        return s;
    }
    else{
        return s;
    }
}
console.log(checkString("New! nuiqbus"));
console.log(checkString("hbgrtbi"));
