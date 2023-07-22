var persons = [
    "usman",
    "huzaifa",
    "hassan",
];
for (var i = persons.length - 1; i >= 2; i--) {
    var removeguest = persons.pop();
    // console.log(removeguest)
    // const item = guest[i];
    console.log("sorry ".concat(removeguest, ", we can't invite you to dinner this time."));
    // guest.pop()
}
//   console.log("i can invite only ")
var allowedInvitees = persons.length;
console.log("I can invite ".concat(allowedInvitees, " person(s) to dinner."));
