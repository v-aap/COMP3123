exports.add = function(x, y) {
    return x + y;
}

exports.subtract = (x,y) => {
    return x - y;
}
function multiply(x,y){
    return x * y;
}

function divide(x,y){
    return x / y;
}

module.exports = {
    multiply,
    divide
}

//From Prof:
// exports.add = function(a, b) {
//     return a + b;
// }

// exports.subtract = (a, b) => {
//     return a - b;
// }

// exports.multiply = (a, b) => {
//     return a * b;
// }

// exports.divide = (a, b) => {
//     return a / b;
    
// }