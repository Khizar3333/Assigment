function carobj(manuf: string, mode: string, ...args: [string, any][]) {
    const car: Record<string, any> = {
        manufacturer: manuf,
        model: mode,
    };

    for (const [key, value] of args) {
        car[key] = value;
    }

    console.log(car);
}

carobj('honda', 'civic', ['color', 'blue'], ['year', 2015]);