var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var magicians = ["David Copperfield",
    "Harry Houdini",
    "Penn Jillette ",
    "Teller",
    "Criss Angel"];
function show_magicians(arr) {
    for (var i = 0; i < arr.length; i++) {
        console.log(arr[i]);
    }
}
//     // exercise42
// show_magicians(magicians)
function make_great(magiciansarr) {
    // for (let i = 0; i < magiciansarr.length; i++) {
    //     magiciansarr[i] = "the Great " + magiciansarr[i];
    //     console.log(magiciansarr[i])
    //   }
    var greatmagi = magiciansarr.map(function (name) { return "great ".concat(name); });
    return greatmagi;
}
//     const resultmagi=make_great(magicians)
// console.log(resultmagi)
//     show_magicians(magicians)
// exercise 43
// @ts-ignore
var greatmag = make_great(__spreadArray([], magicians, true));
console.log(" original array");
show_magicians(magicians);
console.log("modified array");
show_magicians(greatmag);
