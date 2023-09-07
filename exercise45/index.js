function carobj(manuf, mode) {
    var args = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        args[_i - 2] = arguments[_i];
    }
    var car = {
        manufacturer: manuf,
        model: mode,
    };
    for (var _a = 0, args_1 = args; _a < args_1.length; _a++) {
        var _b = args_1[_a], key = _b[0], value = _b[1];
        car[key] = value;
    }
    console.log(car);
}
carobj('honda', 'civic', ['color', 'blue'], ['year', 2015]);
