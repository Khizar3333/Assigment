let magicians:string[]=["David Copperfield",
    "Harry Houdini",
    "Penn Jillette ",
    "Teller", 
    "Criss Angel"]

    function show_magicians(arr:string[]) {
        
        for (let i = 0; i < arr.length; i++) {
            console.log(arr[i])
        }
        
    }

//     // exercise42
    // show_magicians(magicians)
    function make_great(magiciansarr:string[]):string[] {
        
        
        const greatmagi=magiciansarr.map(name=>`great ${name}`)
        return greatmagi
    }
    
//     const resultmagi=make_great(magicians)
    // console.log(resultmagi)
//     show_magicians(magicians)



// exercise 43

const greatmag:string[]=make_great([...magicians])

console.log(" original array")
show_magicians(magicians)

console.log("modified array")
show_magicians(greatmag)