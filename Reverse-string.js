
//Reverse a String By Built-In Functions
function reverseByBuiltIn(str) {
    
    return str.split("").reverse().join("");
}

console.log(reverseByBuiltIn("Hello"));

// Reverse a String With a Decrementing For Loop
function reverseByForLoop(str) {
    var newString = "";
    
    for (let i = str.length - 1; i >= 0; i--) {
        newString += str[i];
    }

    return newString;
}

console.log(reverseByForLoop("Hello"));

