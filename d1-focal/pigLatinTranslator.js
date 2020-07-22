let originalWords = process.argv.slice(2);
let pigLatinWords = [];
const translateToPigLatin = (word) => {
  return word.slice(1, word.length) + word[0] + "ay";
};

for (let i = 0; i < originalWords.length; i++) {
  console.log(translateToPigLatin(originalWords[i]));
  pigLatinWords.push(translateToPigLatin(originalWords[i]));
}

console.log(pigLatinWords.join(' '));

