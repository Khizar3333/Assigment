var magicians = ["David Copperfield",
    "Harry Houdini",
    "Penn Jillette ",
    "Teller",
    "Criss Angel"];
function show_magicians(arr) {
    // magicians.map((items)=>{
    //     console.log(items)
    // })
    for (var i = 0; i < arr.length; i++) {
        // const element = array[1];
        console.log(arr[i]);
    }
}
// exercise42
show_magicians(magicians);
function make_great(magiciansarr) {
    // magiciansarr.map((items)=>{
    //     console.log(`the great ${items}`)
    // })
    for (var i = 0; i < magiciansarr.length; i++) {
        magiciansarr[i] = "the Great " + magiciansarr[i];
        console.log(magiciansarr[i]);
    }
}
make_great(magicians);
show_magicians(magicians);
// console.log(magicians)
