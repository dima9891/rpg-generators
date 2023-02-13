function random_item(items){
    return items[Math.floor(Math.random()*items.length)] 
}

function getTrate(traits) {
    const trait = random_item(traits)
    return trait.description + ' ' + random_item(trait.pair).toLowerCase() + '.'
}