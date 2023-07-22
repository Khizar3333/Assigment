var inputString = "hello world";
var titleCaseString = inputString
    .split(" ").map(function (word) { return word.charAt(0).toUpperCase() + word.slice(1); })
    .join(" ");
console.log(titleCaseString); // Output: "Hello World"
