// Exercise 1 - Capitalize Letter
function capitalize(sen) {
    let words = sen.split(' '); 
    for (let i = 0; i < words.length; i++) {
        let word = words[i];
        if (word.length > 0) {
            words[i] = word[0].toUpperCase() + word.slice(1);
        }
    }
    return words.join(' ');  
}

// Test
console.log(capitalize('the quick brown fox'));

// Exercise 2 - Find Largest
function max(num1, num2, num3) {
    let largest;
    if (num1 >= num2 && num1 >= num3) {
        largest = num1;  
    } else if (num2 >= num1 && num2 >= num3) {
        largest = num2;  
    } else {
        largest = num3; 
    }
    return largest;
}

//Test
console.log(max(1,0,1));
console.log(max(0,-10,-20));
console.log(max(1000,510,440));

//Exercise 3 - Move Characters
function right(input) {
    if (input.length < 3) {
        console.log('The string length must be greater than or equal to 3.');
        return;
    }
    
    let lastThree = input.slice(-3);
    let restOfString = input.slice(0, -3);
    
    return lastThree + restOfString;
}

// Test
console.log(right("Python"));
console.log(right("JavaScript"));
console.log(right("Hi"));

//Exercise 4 - Angle Type
function angle_Type(degree){
    let angle;
    if(degree < 0 || degree > 180){
        angle = 'Please enter an angle between 0-180';
    } else if (degree < 90){
        angle = 'Acute Angle';
    } else if(degree === 90){
        angle = 'Right Angle';
    } else if (degree < 180 && degree > 90){
        angle = 'Obtuse Angle';
    } else if(degree === 180){
        angle = 'Straight Angle';
    }
    return angle;
}

//Test
console.log(angle_Type(47));
console.log(angle_Type(90));
console.log(angle_Type(145));
console.log(angle_Type(180));