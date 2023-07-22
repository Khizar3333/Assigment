let places:string[]=[
    "madina","mekkah","london","turkey","kashmir"
]
places.map((items)=>{
   console.log(items) 
})

// in alphabetical order
let copyplaces=[...places]
copyplaces.sort()
console.log(places)
console.log(copyplaces)

// in reverse alphabetical order

let revplaces=[...places]
revplaces.sort((a,b)=>b.localeCompare(a))
console.log(places)
console.log(revplaces)

// in reverse order
let reverseord:string[]=places.reverse()
reverseord.map((items)=>{
   console.log(items) 
})

// reverse again
let revagain=reverseord.reverse()
console.log(revagain)


// sort in alphabetical order
let sort=places.sort()
console.log(sort)

// sort in reverse alphabetical order

let sortrev=sort.sort((a,b)=>b.localeCompare(a))
console.log(sortrev)
