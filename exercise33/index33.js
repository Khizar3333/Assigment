var oridnalnum = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (var _i = 0, oridnalnum_1 = oridnalnum; _i < oridnalnum_1.length; _i++) {
    var iterator = oridnalnum_1[_i];
    var ordinalend = void 0;
    if (iterator == 1) {
        ordinalend = "st";
    }
    else if (iterator == 2) {
        ordinalend = "nd";
    }
    else if (iterator == 3) {
        ordinalend = "rd";
    }
    else {
        ordinalend = "th";
    }
    console.log("".concat(iterator).concat(ordinalend));
}
