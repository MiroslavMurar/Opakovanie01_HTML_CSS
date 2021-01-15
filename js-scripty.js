var name = "Jack";
var age = "23"; 
var message = "Hello I am " + name + " and I am a " + age + " old";
alert(message);
console.log(message);


var age = 23; 
var joeAge = "23"; 
if (age == joeAge) {
    console.log("I'm the same age aj Joe!")
}

if (age === joeAge) {
    console.log("I'm the same age aj Joe!")
} else {
    console.log("NOT SAME DATA TYPE or VALUE!!")
}