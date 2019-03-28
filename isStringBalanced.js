/*

    -------------------------
    CHECK FOR BALANCED STRING
    Author: Shihabudheen US
    -------------------------

*/


/*
Characters to be compared
OPEN BRACES are the key 
CLOSE BRACES are the value
*/
const TOKENS = {
    '{': '}',
    '[': ']',
    '(': ')'
};

// main function which checks whether the string is balanced
// accepts the string expression as the argument
var isBalanced = exp => {
    let charStack = [];
    for (let char of exp) {
        // check for non alpha numerics
        if (/[^a-zA-Z0-9]/.test(char)) {
            // if an OPEN BRACE push to char stack
            if (isOpenChar(char)) {
                charStack.push(char);
                // if a CLOSE BRACE
            } else {
                // checks whether stack is empty
                if (charStack.length == 0) {
                    return false;
                    // check if the last OPEN BRACE is CLOSED
                } else if (!isNullified(charStack.pop(), char)) {
                    return false;
                }
            }
        }
    }
    // check if STACK is cleared
    return charStack.length == 0;
}
// check for OPEN BRACE
var isOpenChar = char => {
    if (TOKENS.hasOwnProperty(char)) {
        return true;
    }
    return false;
}

// check if OPEN BRACE is closed
var isNullified = (openBrace, closeBrace) => {
    if (TOKENS.hasOwnProperty(openBrace)) {
        return TOKENS[openBrace] == closeBrace;
    }
    return false;
}

exp = '{adda}[]({[(1213123)]})';
let result = isBalanced(exp);
console.log(result);