document.querySelector('.generate-place').addEventListener('click',() => {
    const placeNode = document.createElement('p')
    placeNode.innerHTML = generatePlace(scaryPlace)
    document.querySelector('.scary-places').appendChild(placeNode)
})

document.querySelector('.generate-char').addEventListener('click',() => {
    const placeNode = document.createElement('p')
    placeNode.innerHTML = generateCharacter(character)
    document.querySelector('.characters').appendChild(placeNode)
})

document.querySelectorAll('.remove').forEach((element) => {
    element.addEventListener('click', () => {
        element.parentElement.querySelector('.list').innerHTML = ''
    })
})