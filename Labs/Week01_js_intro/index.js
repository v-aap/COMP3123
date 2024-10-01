console.log('Hello, World!');
var obj = {
    name: 'Val',
    age: 27
}

let student = {
    name: 'Valeria',
    id: 101462436,
    program: 'T177',
    courses: ['html','css','js']
};

console.log(obj);
console.log(student.name);
console.log(typeof(student.id));
console.log(typeof(student));

function sayHello(){
    console.log('Hello, World!');
}

sayHello();
console.log(typeof(sayHello()));

var sayHello = function(){
    console.log('Hello, World!');
}

//Arrow Function
var greet = () => {
    console.log('Hello, World!');
}

const nombre = "Valeria Arce"
console.log(nombre);
console.log(nombre.length);
