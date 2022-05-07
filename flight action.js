
var value3=prompt("enter the number of adult passangers:");
var value1=prompt("enter the number of Children(2-11years) passangers:");
var value2=prompt("enter the number of infant(under 2years) passangers:");


if(value3>0 && value2>=0 && value1>=0){

var n1 = value3;
var n2 = value1;
var n3 = value2;



 
let pay1 = (4800*n1) + (2400*n2) ;
let pay1d = (5500*n1) + (2750*n2);

let pay2 = (5900*n1) + (2950*n2) ;
let pay2d = (6500*n1) + (3250*n2);

let pay3 = (5000*n1) + (2500*n2) ;
let pay3d = (5900*n1) + (2950*n2);

let pay4 = (7600*n1) + (3800*n2) ;
let pay4d = (8500*n1) + (4250*n2);

let pay5 = (3600*n1) + (1300*n2) ;
let pay5d = (4500*n1) + (2250*n2);

let pay6 = (4600*n1) + (2300*n2) ;
let pay6d = (6500*n1) + (3250*n2);

let pay7 = (6000*n1) + (3000*n2) ;
let pay7d = (7500*n1) + (3750*n2);

document.getElementById('pay1dm').innerHTML= pay1d;
document.getElementById('pay1m').innerHTML= pay1;

document.getElementById('pay2dm').innerHTML= pay2d;
document.getElementById('pay2m').innerHTML= pay2;

document.getElementById('pay3dm').innerHTML= pay3d;
document.getElementById('pay3m').innerHTML= pay3;

document.getElementById('pay4dm').innerHTML= pay4d;
document.getElementById('pay4m').innerHTML= pay4;

document.getElementById('pay5dm').innerHTML= pay5d;
document.getElementById('pay5m').innerHTML= pay5;

document.getElementById('pay6dm').innerHTML= pay6d;
document.getElementById('pay6m').innerHTML= pay6;

document.getElementById('pay7dm').innerHTML= pay7d;
document.getElementById('pay7m').innerHTML= pay7;


}
else{
    var value3=prompt("enter AGAIN the number of adult passangers in correct format :");
    var value1=prompt("enter AGAIN the number of Children(2-11years) passangers in correct format :");
    var value2=prompt("enter AGAIN the number of infant(under 2years) passangers in correct format :");

    }
