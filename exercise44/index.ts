
function sandwitches(...item:string[]) {
    console.log('you order a sandwitch with the following items')
    const order=item.map(items=>`${items}`)
    console.log(order)

    
}
sandwitches('chicken','tomato')
sandwitches('beef','lettuce','ketchup')
sandwitches('paneer','cucumber','mushrooms')