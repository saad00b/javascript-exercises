const fibonacci = function(n) {
    n = parseInt(n);
    if (n=== 1 || n===2) {return 1;}
    if (n=== 0) {return 0;}
    if (n< 0) {return "OOPS";}
    return fibonacci(n-1)+fibonacci(n-2);
};

// Do not edit below this line
module.exports = fibonacci;
