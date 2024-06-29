import appetizers from "../data/appetizers"

function loadMenu(){
    const element = document.querySelector('#content')

    const appetizerDiv = document.createElement('div')
    appetizerDiv.classList.add('appetizer')

    const header = document.createElement('h1')
    header.textContent = 'Appetizers'

    appetizerDiv.appendChild(header)

    for(const appetizer of appetizers){

        const div = document.createElement('div')

        const name = document.createElement('h4')
        const price = document.createElement('p')
        const calories = document.createElement('p')

        name.textContent = appetizer.name;
        price.textContent = appetizer.price;
        calories.textContent = appetizer.calories

        div.appendChild(name)
        div.appendChild(price)
        div.appendChild(calories)

        appetizerDiv.appendChild(div)
    }

    element.appendChild(appetizerDiv)
}

export default loadMenu