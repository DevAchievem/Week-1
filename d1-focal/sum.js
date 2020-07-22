'use strict';

const sumItUp = (args) => {
  let sum = 0;
  for (let i = 0; i < args.length; i++) {
    sum += Number(args[i]);
  }
  return sum;
};


console.log(sumItUp(process.argv.slice(2)));