//Global Objects
global.a = 100


//Local Objects
var name = "Valeria Arce"
var age = 27
var course = "Computer Science"

function greet(){
    return "Hello World"
}

//whatever you put in the export is what will be available (top of node index.js)
module.exports = {
    name,
    age,
    course,
    greet
}