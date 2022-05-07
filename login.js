function pass_validation()
{
var firstpassword=document.f1.pass1.value;  
var secondpassword=document.f1.pass2.value;  

if(firstpassword==secondpassword){  
return true;  
}  
else{  
alert("please enter same password in repeat password section as entered in password section");  
return false;  
}  
} 
