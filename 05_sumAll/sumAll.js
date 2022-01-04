const sumAll = function(firstNum, secondNum) {
  if (typeof(firstNum) != 'number' || typeof(secondNum) != 'number' || firstNum < 0 || secondNum < 0) {
    return 'ERROR';
  };
  if (firstNum > secondNum) {
    [firstNum, secondNum] = [secondNum, firstNum];
  };
  
  let sum = 0;
  for (i = firstNum; i <= secondNum; i++) {
    sum += i;
  }

  return sum;
};

// Do not edit below this line
module.exports = sumAll;
