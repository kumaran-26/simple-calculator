
function add(){
    var f=document.getElementById("first").value
    var s =document.getElementById("second").value
    var r=Number(f)+Number(s)
    var ans=document.getElementById("ans").innerHTML="Your result is"
    document.getElementById("result").innerHTML=r

    
}
function sub(){
    var f=document.getElementById("first").value
    var s =document.getElementById("second").value
    var r=Number(f)-Number(s)
    var ans=document.getElementById("ans").innerHTML="Your result is"
    document.getElementById("result").innerHTML=r

    
}
function mul(){
    var f=document.getElementById("first").value
    var s =document.getElementById("second").value
    var r=Number(f)*Number(s)
    var ans=document.getElementById("ans").innerHTML="Your result is"
    document.getElementById("result").innerHTML=r

    
}
function div(){
    var f=document.getElementById("first").value
    var s =document.getElementById("second").value
    var r=Number(f)/Number(s)
    var ans=document.getElementById("ans").innerHTML="Your result is"
    document.getElementById("result").innerHTML=r

    
}
function del(){
    document.getElementById("first").value = ''
document.getElementById("second").value = ''
document.getElementById("result").innerHTML = ''
document.getElementById("ans").innerHTML=''

    
}