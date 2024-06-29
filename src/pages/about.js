function loadAbout(){
    const element = document.querySelector('#content')

    const contactInfo = document.createElement('p')

    contactInfo.textContent = 'Call us at 910-222-333'

    element.appendChild(contactInfo)
}

export default loadAbout