// exercise 30
let usernames:string[]=['admin','khizar','usman','huzaifa','hassan']

usernames.forEach(element => {
    if (element=="admin") {
      console.log  ("Hello admin, would you like to see a status report?")
    }
    else{
    console.log(`Hello ${element}, have a great day!`)
    }
});


// exercise 31
// let usernamescheck:string[]=['admin','khizar','usman','huzaifa','hassan']
let usernamescheck:string[]=[]
if(usernamescheck.length!==0){
usernamescheck.forEach(element => {
    if (element=="admin") {
      console.log  ("Hello admin, would you like to see a status report?")
    }
    else{
    console.log(`Hello ${element}, have a great day!`)
    }
})}
else{
console.log("We need to find some users!")
}

    
