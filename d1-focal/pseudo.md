write a nod eprogram software that takes in an unlimited number of comand line arguments, goes through each and prints out the sum of them.

Solution:

set values = inputs from command line (make sure only numbers)
function sum (array of string/regular numbers) => number:
  set sum = o
  loop through values (=> v)
    convert v into number
    ensure it's a usable number (if not, then skip?)
    add v into sum (sum += v)
  end loop
  return sum # DONE!

NOTE: 

- what if input is not numbers?
- what if no numbers?
- what if negative numbers?
- what if decimals?
- what if numbers are ridic large yo?
- what if non-numbers (abc, etc)?

Error Driven Development
- Cause errors first and use them to your advantage
- 
