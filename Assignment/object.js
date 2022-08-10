var info={
    name:"Mittali Lalwani",
    age :21,
    Address:{city:AbortSignal,State:"U.P",Pincode:282007},
    Hobbies:["Dancing","travelling","playing"],
    details:function(){
        return this.name+" "+ "and my age is"+this.age+"."+"I belong to"+this.Address.city+"in"+this.Address.state+this.Address.Pincode;
    }
}
document.write("<br>name :"+info.name);
document.write("<br>age :"+info.age);
document.write("<br>Address :"+info.Address.city);
document.write("<br>Hobbies :"+info.Hobbies);
document.write("<br>Display info function:"+info.display());
