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

    // exercise42
    show_magicians(magicians)
    function make_great(magiciansarr:string[]) {
        
        for (let i = 0; i < magiciansarr.length; i++) {
            magiciansarr[i] = "the Great " + magiciansarr[i];
            console.log(magiciansarr[i])
          }
    }
    
    make_great(magicians)
    
    show_magicians(magicians)

