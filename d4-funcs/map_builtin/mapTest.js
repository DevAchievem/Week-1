const lighthouses = ["Gibraltar Point", "Peggy's Point", "Cove Island", "Discovery Island", "Cape Scott", "Point Clark", "Kincardine"];

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }

  return results;
};

const results1 = map(lighthouses, word => word.length);
console.log(results1);

/*

loop through an array of strings to count each index
loop through each index to count the letters
return the count of letters instead of the words
return it back as an array

*/

// It should output: [ 15, 13, 11, 16, 10, 11, 10 ]
