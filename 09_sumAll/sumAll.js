const sumAll = function(a,b) {
    if (a < 0 || b < 0) {
        return "ERROR";
    }
    if (a%1 !== 0 ||b%1 !== 0 ) {
        return "ERROR";
    }
    if (typeof a !== "number" || typeof b !== "number") {
        return "ERROR";
    }
    let small = a > b ? b : a ;
    let big = a > b ? a : b ;
    let sum = 0;
    for (let i=small ; i <= big ; i++) {
        sum += i ;
    }
    return sum ;
};

// Do not edit below this line
module.exports = sumAll;
