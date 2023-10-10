// A set of words can be grouped together in different cases.

// For example, "hello there" in snake case would be written "hello_there"
// UPPER_SNAKE_CASE means taking a string and writing it in

// Implement a function that:

// Given a string input like "hello there"
// When we call this function with the input string
// it returns the string in UPPER_CAMEL_CASE, so "HELLO_THERE"

// Another example: "lord of the rings" should be "LORD_OF_THE_RINGS"

// You will need to come up with an appropriate name for the function
// Use the string documentation to help you find a solution
function toString(a) {
  const words = a.split(" ");
  //const capitalizedWords = words.map((word) => word.toUpperCase());
  const capitalizedWords = words.toUpperCase();
  return capitalizedWords.join(" ");
}
console.log(toString(`good after noon`));
