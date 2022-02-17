/* Capitalize the First Letter of a String in JavaScript */

function StringChallenge(str) {
  return str
    .toLowerCase()
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

// keep this function call here
console.log(StringChallenge("hello world"));
