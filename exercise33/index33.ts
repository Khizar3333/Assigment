let oridnalnum:number[]=[1,2,3,4,5,6,7,8,9]
for (const iterator of oridnalnum) {
    let ordinalend:string
    if(iterator==1){
        ordinalend="st"
    }
    else if(iterator==2){
        ordinalend="nd"
    }
    else if(iterator==3){
        ordinalend="rd"
    }
    else {
        ordinalend="th"
    }
    console.log(`${iterator}${ordinalend}`)
    

}