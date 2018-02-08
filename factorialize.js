function factorializeForLoop(num) {

    if(num < 0) {

        return ''
    } else if(num === 0 || num === 1) {

        //factorialize of zero is 1
        return 1
    } else {
        // Using formula n! = n (n - 1)
        // Define "fac" is a product of multiply
        // "Num" is "n"
        let fac = num;

        for (let i = num; i > 1 ; i--) {
            
            //n! = n (n - 1)
            fac *= num - 1
            num--             
        }

        return fac
    }
}

function factorializeWhileLoop(num) {
    let fac = num

    if(num === 0 || num === 1) {

        return 1
    } 

    while(num > 1) {

        num--
        fac *= num 
    }

    return fac
}

console.log("Using for loop: " + factorializeForLoop(5));
console.log("Using while loop: " + factorializeWhileLoop(5));

