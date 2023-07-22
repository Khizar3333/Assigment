var pizza = ["cheese pizza", "peporoni pizza", "chicken tikka pizza"];
// for (let index = 0; index < pizza.length; index++) {
// console.log(`i like ${pizza[index]}`)    
// }
for (var _i = 0, pizza_1 = pizza; _i < pizza_1.length; _i++) {
    var iterator = pizza_1[_i];
    console.log("i like ".concat(iterator));
}
