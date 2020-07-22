const stringConvert = (array) => {
  let string = "";
  for (let i = 0; i < array.length; i++) {
    string += array[i].substring(1, array[i].length + 1) + array[i].substring(0, 1) + "ay ";
  }
  console.log(string);
};

console.log(stringConvert(process.argv.slice(2)));