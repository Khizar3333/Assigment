function sandwitches() {
    var item = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        item[_i] = arguments[_i];
    }
    console.log('you order a sandwitch with the following items');
    var order = item.map(function (items) { return "items are ".concat(items); });
    console.log(order);
}
sandwitches('chicken', 'tomato');
sandwitches('beef', 'lettuce', 'ketchup');
sandwitches('paneer', 'cucumber', 'mushrooms');
