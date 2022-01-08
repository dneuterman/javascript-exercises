const fibonacci = function(value) {
  let position = parseInt(value);
  if (position <= 0) {
    return 'OOPS'
  }
  let prev = 0;
  let sum = 0;
  let current = 1;
  for (i=1; i<position; i++) {
    sum = current + prev;
    prev = current;
    current = sum;
  };
  return current;
};

// Do not edit below this line
module.exports = fibonacci;
