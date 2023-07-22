const guest:string[]=[ 
    "usman",
    "huzaifa",
    "hassan",]
    guest.map((item)=>{
            console.log(`hey ${item} , would you like to join me for dinner tonight?`)
    })

    // exercise15
    console.log(guest[2] ,"cannot come to the dinner tonight")
    guest[2]="hussnain"

    console.log("new list is:")
    guest.map((item)=>{
        console.log(`hey ${item} , would you like to join me for dinner tonight?`)
})

// exercise16

console.log("Great news! We found a bigger dinner table. More guests are welcome!");
// add guest at the start of array
guest.unshift("saif")
const middlemember:string="awais"

// add guest at the middle of array

guest.splice(2,0,middlemember)

// add guest at the end of array

guest.push("bilal")

console.log("updated list is:")
guest.map((item)=>{
    console.log(`hey ${item} , would you like to join me for dinner tonight?`)
})

// exercise17
console.log("sorry we can invite only two persons")
for (let i = guest.length-1;i >=2; i--) {
    const removeguest=guest.pop()
    // console.log(removeguest)
    // const item = guest[i];
    console.log(`sorry ${removeguest}, we can't invite you to dinner this time.`);
    // guest.pop()
  }
  guest.map((item)=>{
    console.log(`${item} you are still invited`)
  })
  for (let i = 0;i <=guest.length; i++){
    guest.pop()
  }
  
  console.log(guest)
