let input = process.argv[2];

if (input)
  console.log(reverse(input));

const reverse = (original) => {
  return original.split('').reverseList().join('');
};