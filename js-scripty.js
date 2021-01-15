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


var students = ["Tim", "Joe", "Nick"]; 
//var newField = [];
//newField.push(students[0]); 
//newField.push(students[1]);
var index = students.indexOf("Joe"); 
//if (index != 1) {
//    console.log("Joe's index !=1")
//} else {
//    console.log("Joe's index ==1"); 
//}

console.log(students); 
students.splice(index, 1); 

console.log(students);


var x = function(z, y) {
    return z + y; 
}

console.log(x());

var array = []; 
array.push(x(12,43));
array.push(x(22,11));
array.push(x(3,6));
array.push(x(8,77));

console.log(array); 



function myFunc(x, y) {
    return x * y;
}


console.log(myFunc(4,5));



//var student = {
//    firstName: "John", 
//    lastName: "Parker", 
//    age: 7
//};
//
//console.log(student.firstName);
//console.log(student.lastName);





//var Student = {
//    firstName: "John", 
//    lastName: "Parker", 
//    age: 7, 
//    greeting: function() {
//        return "Hi I am " + this.firstName + " and I am " + this.age + " years old";
//    }
//};
//
//console.log(Student.greeting());
//console.log(Student["firstName"]); 
//console.log(Student["lastName"]); 





function Student(firstName, lastName, age) {
    this.firstName = firstName; 
    this.lastName = lastName; 
    this.age = age; 
    this.greeting = function() {
        return "Hi I am " + this.firstName + " and I am " + this.age + " years old";
    }; 
}

var students = [];
students.push(new Student("Jenny", "Laga", 5));
students.push(new Student("Timmy", "Turner", 6));
students.push(new Student("Carl", "Jr", 9));

for (var index = 0;  index < students.length; index++) {
    var student = students[index]; 
    console.log(student.greeting());
}













