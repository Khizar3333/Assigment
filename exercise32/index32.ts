let new_users:string[]=["usman","saif","khizar","hamza","ehsan"]
let current_users:string[]=["saim","muneeb","ehsan","HAMZA","kashif"]
for (let i = 0; i < new_users.length; i++) {
    // const element = array[new_users];
    let username:boolean=true
    for(let j=0;j<current_users.length;j++)
    // if(current_users[j].toLowerCase()==new_users[i].toLowerCase()){
    if(current_users[j].toLowerCase()==new_users[i].toLowerCase()){
        username=false
        break
    }
    // console.log(" person will need to enter a new username");
    if (username) {
        console.log(`the username ${new_users[i]} is available`)
    }
    else{
        console.log(`the username ${new_users[i] } is already taken. please enter new username`)
    }
    
}


// new_users.forEach(element => {
//     if(element[0]==current_users[0]){
//         console.log("username is available.")
//     }
// });
