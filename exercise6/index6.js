var originalString = "\t Hello, world!\n I have some apples\t.";
var strippedString = originalString.split("\t").join("");
console.log(originalString);
console.log(strippedString);
// Output: "Hello, world! I hve some pples."
