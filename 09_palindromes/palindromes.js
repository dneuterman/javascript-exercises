const convertStringToLetters = (str) => {
  const re = /[^a-zA-Z]+/;
  let newStr = str.split(re).filter(Boolean);
  return newStr.join('').toLowerCase();
}

const reverseString = (str) => {
  return str.split('').reverse().join('');
}

const palindromes = function (str) {
  return convertStringToLetters(str) === reverseString(convertStringToLetters(str));
};

// Do not edit below this line
module.exports = palindromes;
