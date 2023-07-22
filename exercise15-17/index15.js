var guest = [
    "usman",
    "huzaifa",
    "hassan",
];
guest.map(function (item) {
    console.log("hey ".concat(item, " , would you like to join me for dinner tonight?"));
});
// exercise15
console.log(guest[2], "cannot come to the dinner tonight");
guest[2] = "hussnain";
console.log("new list is:");
guest.map(function (item) {
    console.log("hey ".concat(item, " , would you like to join me for dinner tonight?"));
});
// exercise16
console.log("Great news! We found a bigger dinner table. More guests are welcome!");
// add guest at the start of array
guest.unshift("saif");
var middlemember = "awais";
// add guest at the middle of array
guest.splice(2, 0, middlemember);
// add guest at the end of array
guest.push("bilal");
console.log("updated list is:");
guest.map(function (item) {
    console.log("hey ".concat(item, " , would you like to join me for dinner tonight?"));
});
console.log("sorry we can invite only two persons");
for (var i = guest.length - 1; i >= 2; i--) {
    var removeguest = guest.pop();
    // console.log(removeguest)
    // const item = guest[i];
    console.log("sorry ".concat(removeguest, ", we can't invite you to dinner this time."));
    // guest.pop()
}
guest.map(function (item) {
    console.log("".concat(item, " you are still invited"));
});
for (var i = 0; i <= guest.length; i++) {
    guest.pop();
}
console.log(guest);
