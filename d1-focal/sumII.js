console.log('hello');
const sum = () => {
  let total = 0;
  let numberString = [1,2,3,6];
  for (let numString of numberString) {
    let num = Number(numString);
    total += num;
  }
};


console.log('total: ',total);