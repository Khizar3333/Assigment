var places = [
    "madina", "mekkah", "london", "turkey", "kashmir"
];
// places.map((items)=>{
//    console.log(items) 
// })
// in alphabetical order
// let copyplaces=[...places]
// copyplaces.sort()
// console.log(places)
// console.log(copyplaces)
// in reverse alphabetical order
// let revplaces=[...places]
// revplaces.sort((a,b)=>b.localeCompare(a))
// console.log(places)
// console.log(revplaces)
// in reverse order
// let reverseord:string[]=places.reverse()
// reverseord.map((items)=>{
//    console.log(items) 
// })
// reverse again
// let revagain=reverseord.reverse()
// console.log(revagain)
var sort = places.sort();
console.log(sort);
var sortrev = sort.sort(function (a, b) { return b.localeCompare(a); });
console.log(sortrev);
