const removeFromArray = function(arr, ...values) {
  return arr.filter(arrValue => values.includes(arrValue) === false)
};

// Do not edit below this line
module.exports = removeFromArray;
