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
document.write(checkString("New! nuiqbus"+"<br>"));
document.write(checkString("hbgrtbi"));
