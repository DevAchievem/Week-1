// let myArgs = process.argv.slice(2);
// let string = myArgs[0];
// const obfuscate = () => {

//   let newString = string.replace(/a/g, "4");
//   newString = newString.replace(/e/g, "3");
//   newString = newString.replace(/o/g, "0");
//   newString = newString.replace(/l/g, "1");
//   return newString;
// };

// console.log(obfuscate());

// const password = process.argv[2];
// const obfuscate = function(password) {
//   let str1 = 'aeol';
//   let str2 = '4301';
//   let arr = password.split('');
//   for (let i = 0; i < password.length; i++) {
//     if (str1.includes(arr[i])) {
//       arr[i] = str2[str1.indexOf(arr[i])];
//     }
//   }
//   console.log(arr.join(''));
// };
// obfuscate(password);


// let toBePW = process.argv.slice(2).toString();
// let encode = char => {
//   switch (char) {
//     case "a":
//       return "4";
//     case "e":
//       return "3";
//     case "o":
//       return "0";
//     case "l":
//       return "1";
//     default:
//       return char;
//   }
// };
// const obfuscate = input => {
//   let safePW = "";
//   let words = input.split("");
//   for (let word of words) {
//     safePW += encode(word);
//   }
//   return safePW;
// };

// console.log(obfuscate(toBePW));

const pass = process.argv[2];

const code = {
  a: 4,
  e: 3,
  o: 0,
  l: 1,
};

const obfuscate = (password, encoding) => {
  let output = '';
  for (let char of password) {
    output += encoding[char] ? encoding[char] : char;
  }
  return output;
};

console.log(obfuscate(pass, code));