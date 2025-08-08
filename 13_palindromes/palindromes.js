const alphanumerical = 'abcdefghijklmnopqrstuvwxyz0123456789';
const palindromes = function (str) {
    str =str.toLowerCase()
    let newStr = "";
    for (char of str) {
        if (alphanumerical.includes(char)) 
        {newStr += char;}
    }
    
    let isPalindrome = true;
    let N = newStr.length;
    for (let i =0;i<N/2;i++) {
        if (newStr[i] !== newStr[N-i-1]) {isPalindrome = false;}
    }
    return isPalindrome;
};

// Do not edit below this line
module.exports = palindromes;
