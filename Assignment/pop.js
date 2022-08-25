window.onload=function(){
    console.log("script called")
    setTimeout(()=>{
        stopLoader();
    },1000);
};
function stopLoader(){
    document.querySelector('.loader').style.display="none";
    document.querySelector('.container').style.display="block";
}
