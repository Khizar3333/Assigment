let inputString = "hello world";
let titleCaseString = inputString
  .split(" ") .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
  .join(" ");

console.log(titleCaseString); // Output: "Hello World"
