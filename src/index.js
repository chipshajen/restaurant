import loadHome from "./pages/home";
import loadMenu from "./pages/menu";
import loadAbout from "./pages/about";
import './style.css'

const content = document.querySelector('#content')

const homeButton = document.querySelector('#home')
const menuButton = document.querySelector('#menu')
const aboutButton = document.querySelector('#about')

homeButton.addEventListener('click', () => {
    content.replaceChildren();
    homeButton.classList.add('selected')
    menuButton.classList.remove('selected')
    aboutButton.classList.remove('selected')
    loadHome();
})

menuButton.addEventListener('click', () => {
    content.replaceChildren();

    menuButton.classList.add('selected')
    homeButton.classList.remove('selected')
    aboutButton.classList.remove('selected')

    loadMenu();
})

aboutButton.addEventListener('click', () => {
    content.replaceChildren();

    aboutButton.classList.add('selected')
    menuButton.classList.remove('selected')
    homeButton.classList.remove('selected')

    loadAbout();
})

function fixSelectedTabColor(button){
    
}

loadHome();