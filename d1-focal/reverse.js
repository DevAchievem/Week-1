'use strict';

const reverseOne = (str) => {
  let newStr = "";
  for (let i = str.length - 1; i >= 0; i--) {
    newStr += str[i];
  }
  console.log(newStr);
};

const reverseAll = (array) => {
  for (let i = 0; i < array.length; i++) {
    reverseOne(array[i]);
  }
};

console.log(reverseAll(process.argv.slice(2)));