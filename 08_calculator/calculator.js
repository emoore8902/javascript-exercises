const add = function(x, y) {
	return x+y;
};

const subtract = function(x, y) {
	return x-y;
};

const sum = function(array1) {
const initialValue = 0;
const sumWithInitial = array1.reduce(
  (previousValue, currentValue) => previousValue + currentValue,
  initialValue
);
return sumWithInitial;
};

const multiply = function(array1) {
  let output = 1;
  for (let i = 0; i < array1.length; i++){
    output *= array1[i];
  }
  return output;
};

const power = function(x,y) {
	return Math.pow(x,y);
};

const factorial = function(x) {
	if (x<0){
    return -1;
  }
  else if (x == 0){
    return 1;
  }
  else {
    return (x * factorial(x-1));
  }
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
