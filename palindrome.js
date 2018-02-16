var str = "racecar"

function palindrome(str) {
    //Define Regular Expression
    var re = /[\W_]/g // Or can defint as * var re = /[^A-Za-z0-9]/g *

    var lowerCaseStr = str.toLowerCase().replace(re, '')
    var reverseStr = lowerCaseStr.split('').reverse().join('')

    return str === reverseStr
}

console.log(palindrome(str))

//Source: https://medium.freecodecamp.org/two-ways-to-check-for-palindromes-in-javascript-64fea8191fd7
