var value3=prompt("enter the number of adult passangers:");
var value1=prompt("enter the number of Children(2-11years) passangers:");
var value2=prompt("enter the number of infant(under 2years) passangers:");


if(value3>0 && value2>=0 && value1>=0){

var n1 = value3;
var n2 = value1;
var n3 = value2;



 
let pay1 = (600*n1) + (300*n2) ;
let pay1d = (800*n1) + (400*n2);

let pay2 = (1700*n1) + (850*n2) ;
let pay2d = (2500*n1) + (1250*n2);

let pay3 = (1950*n1) + (975*n2) ;
let pay3d = (3000*n1) + (1500*n2);

let pay4 = (900*n1) + (450*n2) ;
let pay4d = (1000*n1) + (500*n2);


document.getElementById('pay1dm').innerHTML= pay1d;
document.getElementById('pay1m').innerHTML= pay1;

document.getElementById('pay2dm').innerHTML= pay2d;
document.getElementById('pay2m').innerHTML= pay2;

document.getElementById('pay3dm').innerHTML= pay3d;
document.getElementById('pay3m').innerHTML= pay3;

document.getElementById('pay4dm').innerHTML= pay4d;
document.getElementById('pay4m').innerHTML= pay4;




}
else{
    var value3=prompt("enter AGAIN the number of adult passangers in correct format :");
    var value1=prompt("enter AGAIN the number of Children(2-11years) passangers in correct format :");
    var value2=prompt("enter AGAIN the number of infant(under 2years) passangers in correct format :");

    }
