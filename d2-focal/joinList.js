//  * To implement this we'll create a joinList function which will take 
//  * in any array of strings return a comma-separated string.
//  *
//  * Note: We can NOT use the built-in Array join function.
//  */

// const joinList = (array) => {
//   let strReplace = array.toString();
//   strReplace = strReplace.replace(/,/g,", ");
//   return strReplace;
// };

const joinList = (array) => {
  let str = '';
  for (let i = 0; i < array.length; i++) {
    str += array[i];
    if (i < (array.length - 1)) {
      str += ', ';
    }
  }
  return str;
};

const conceptList = ["gists","types","operators","iteration","problem solving"];
const concepts = joinList(conceptList);
console.log(`Today I learned about ${concepts}.`);
