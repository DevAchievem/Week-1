const diceRoller = () => {
  let results = "";
  for (let i = 0; i < process.argv.slice(2); i++) {
    results += (1 + Math.floor(Math.random() * 6));
    if (i < process.argv.slice(2) - 1) {
      results += ", ";
    }
  }
  console.log("You rolled " + process.argv.slice(2) + " dice: " + results);
  return results;
};

diceRoller(process.argv.slice(2));