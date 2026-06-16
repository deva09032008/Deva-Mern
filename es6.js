let studentCount = 10;
studentCount = 11;
console.log("Student Count:", studentCount);

//const
const collegeName = "VETIAS";
console.log("College Name:",collegeName);

//Template literals
let studentName = "Arun";
console.log(`Welcome ${studentName} to ${collegeName}`);

//object
const  student = {
    name:"Arun",
    age:20,
    department:"CSA"
}
console.log(student);
//Destructuring
const{ name, age, department } = student;
console.log("Name:",name);
console.log("Age:",age);
console.log("Department:",department);

//Arrow function
const displayStudent = () => {
    console.log(`Student Name: ${name}`);
}
//Array
const  studentArray= ["Arun
    
    
    
    ","priya","Deva"]
console.log(studentArray);

//spread operator

const updatedStudent=[
    ...studentArray,
    "Nafila"
]
console.log(updatedStudent);
//rest operator
function maximumMarks(...marks){
    let max = Math.max(...marks);
    return max;
}
console.log("Maximum Marks:",maximumMarks(80,90,50));



