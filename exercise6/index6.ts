const originalString = "\t Hello, world!\n I have some apples\t.";
const strippedString = originalString.split("\t").join("");
console.log(originalString);
console.log(strippedString);
// Output: "Hello, world! I hve some pples."
