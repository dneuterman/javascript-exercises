const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(args) {
	return args.reduce((a, b) => {
    return a + b
  }, 0);
};

const multiply = function(args) {
  return args.reduce((a, b) => {
    return a * b;
  }, 1)
};

const power = function(number, power) {
	let answer = 1;
  for (i = 0; i < power; i++) {
    answer *= number;
  };
  return answer;
};

const factorial = function(num) {
  if (num === 0) {
    return 1;
  }

  let answer = 1;
  for (i = 1; i <= num; i++) {
    answer *= i;
  };
	return answer;
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
