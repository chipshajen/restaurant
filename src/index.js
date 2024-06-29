import loadHome from "./pages/home";
import loadMenu from "./pages/menu";
import './style.css'

const content = document.querySelector('#content')

const homeButton = document.querySelector('#home')
const menuButton = document.querySelector('#menu')
const aboutButton = document.querySelector('#about')

homeButton.addEventListener('click', () => {
    console.log('home')
})

menuButton.addEventListener('click', () => {
    content.replaceChildren();
    loadMenu();
})

aboutButton.addEventListener('click', () => {
    console.log('about')
})

loadHome();