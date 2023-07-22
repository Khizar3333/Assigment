var new_users = ["usman", "saif", "khizar", "hamza", "ehsan"];
var current_users = ["saim", "muneeb", "ehsan", "HAMZA", "kashif"];
for (var i = 0; i < new_users.length; i++) {
    // const element = array[new_users];
    var username = true;
    for (var j = 0; j < current_users.length; j++)
        // if(current_users[j].toLowerCase()==new_users[i].toLowerCase()){
        if (current_users[j] == new_users[i]) {
            username = false;
            break;
        }
    // console.log(" person will need to enter a new username");
    if (username) {
        console.log("the username ".concat(new_users[i], " is available"));
    }
    else {
        console.log("the username ".concat(new_users[i], " is already taken. please enter new username"));
    }
}
// new_users.forEach(element => {
//     if(element[0]==current_users[0]){
//         console.log("username is available.")
//     }
// });
