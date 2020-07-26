const nameInverter = function(name) {
  if (name === undefined) {
    return undefined;
  }
  let fullName = name.split(' ');
  const isempty = (x) => {
    if (x !== "") {
      return true;
    }
  };
  let filtered = fullName.filter(isempty);
  // console.log(filtered);
  if (name === '') {
    return name = "";
  }
  if (name === ' ') {
    return name = "";
  }
  if (filtered === "Dr.") {
    name = "";
    return name;
  }
  if (filtered.length === 2) {
    let firstName = filtered[0];
    let	lastName = filtered[filtered.length - 1];
    return lastName + ", " + firstName;
  }
  if (filtered[0] === " ") {
    let firstName = filtered[0];
    let	lastName = filtered[filtered.length - 1];
    return "" + lastName + ", " + "" + firstName;
  }
  if (filtered[0] === "Dr." && filtered.length === 1) {
    return '';
  }
  if (filtered[0] === "Dr. " && filtered.length[1] === "") {
    return filtered[0] + " " + filtered[1];
  }
  filtered.join();
  if (filtered.length === 3 && filtered[0] === "Dr.") {
    return filtered[0] + " " + filtered[2] + ", " + filtered[1];
  }

  return name;
};
// console.log(nameInverter("   Mathius    Johnson"));
console.log(nameInverter("Dr. Mathius Johnson"));
module.exports = nameInverter;

// console.log(nameInverter("Dr."));