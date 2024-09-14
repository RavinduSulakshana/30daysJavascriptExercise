const points = ["-1", "2", "-4", "-3", "-1", "0", "4", "8"];
const sortedPoints = [-4, -3, -1, -1, 0, 2, 4, 8];
const distance = 12;

//Calculate the total annual income of the person from the following text. ‘He earns 4000 euro from salary per month, 10000 euro annual bonus, 5500 euro online courses per month.’
const pattern = /\d+/g;
const text =
  "He earns 4000 euro from salary per month, 10000 euro annual bonus, 5500 euro online courses per month";
const numbers = text.match(pattern);
console.log(numbers);
const total_salary = Number(numbers[0]) * 12;
const annual_bonus = Number(numbers[1]);
const total_income_courses = Number(numbers[2]) * 12;
const total_income = total_income_courses + total_salary + annual_bonus;
console.log(total_income);

//The position of some particles on the horizontal x-axis -12, -4, -3 and -1 in the negative direction, 0 at origin, 4 and 8 in the positive direction. Extract these numbers and find the distance between the two furthest particles.
const pattern_one = /-?\d+/g;
const text_one =
  "The position of some particles on the horizontal x-axis -12, -4, -3 and -1 in the negative direction, 0 at origin, 4 and 8 in the positive direction";
const positions = text_one.match(pattern_one).map(Number);
const maxDistance = Math.max(...positions) - Math.min(...positions);
console.log(maxDistance);

//Write a pattern which identify if a string is a valid JavaScript variable
function is_valid_variable(pattern) {
  const regex = /^[a-zA-Z_$][a-zA-Z_$0-9]*$/;
  return console.log(regex.test(pattern));
}
is_valid_variable("first_name");
is_valid_variable("first-name");
is_valid_variable("1first_name");
is_valid_variable("firstname");
