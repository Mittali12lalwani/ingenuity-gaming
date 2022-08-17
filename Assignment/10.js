//Task1

//Call
var obj={
    firstname:"Mittali",
    lastname:"Lalwani",
    fullname:function(){
        return this.firstname+" "+this.lastname;
    }
}
// console.log(obj.fullname());
var person2={
    firstname:"Ishita",
    lastname:"Tiwari",
}


document.write("<br>"+obj.fullname.call(person2));

//Apply

var obj1={
    firstname:"Vanya",
    lastname:"Sharma",

}
document.write(obj.fullname.apply(obj1));


 


