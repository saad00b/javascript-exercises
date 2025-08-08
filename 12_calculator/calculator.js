const add = function(a,b) {
	return a+b;
};

const subtract = function(a,b) {
	return a-b;
};

const sum = function(arr) {
  let total =0;
  for (num of arr) { total+= num;}
  return total;
};

const multiply = function(arr) {
  let total =1;
  for (num of arr) { total *= num;}
  return total;
};

const power = function(x,n) {
  let result =1;
  for (let i=0;i<n;i++) {result *= x;}
  return result ;
	
};

const factorial = function(n) {
  let result =1;
  for (let i=1;i<=n;i++) {result *= i;}
  return result;
	
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
