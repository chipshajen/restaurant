function loadHome(){
    const element = document.querySelector('#content')

    const img = new Image()
    img.src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmDrniCUtTuYTuWSDri6cLmcNsZROeiJcBzQ&s'

    const h1 = document.createElement('h1')
    h1.textContent = 'Very nice Restaurant'

    const p = document.createElement('p')
    p.textContent = 'This place is really nice, eat here'

    element.appendChild(img)
    element.appendChild(h1)
    element.appendChild(p)
}

export default loadHome

