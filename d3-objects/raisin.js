// Attribution: Mathius Johnson and Quinn

const raisinAlarm = function(cookie) {
  // Put your solution here
  for (const item of cookie) {
    if (item === "🍇") {
      return "raisin alert!";
    }
  }
  return "all good!";
};

console.log(raisinAlarm(["🍫", "🍫", "🍇", "🍫"]));
console.log(raisinAlarm(["🍫", "🍇", "🍫", "🍫", "🍇"]));
console.log(raisinAlarm(["🍫", "🍫", "🍫"]));

/*

write a for loop that goes through an array of chocolate chips or raisins
  if the current element is a raisin,
    return raisin alert
  if no raisins alerted, return all good

*/

/*
  function raisinAlarmArray(cookie array):
    result = []
    loop through cookie array
      add raisinAlarm(cookie) to result
    return result
*/

const raisinAlarmArray = (cookies) => {
  let result = [];
  for (let cookie of cookies) {
    result.push(raisinAlarm(cookie));
  }
  return result;
};

console.log(raisinAlarmArray(
  [
    ["🍫", "🍫", "🍇", "🍫"],
    ["🍫", "🍇", "🍫", "🍫", "🍇"],
    ["🍫", "🍫", "🍫"]
  ]
));


// Expected Output
// ["Raisin alert!", "Raisin alert!", "All good!"]

