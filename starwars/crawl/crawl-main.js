import { films } from '../assets/films.js'

let mainSection = document.querySelector('main')
let mainHeader = document.querySelector('header')

let crawlButton = document.createElement('button')
let planetButton = document.createElement('button')
let characterButton = document.createElement('button')

crawlButton.textContent = 'View Each Films Opening Crawl'
planetButton.textContent = 'Check out the planets of the Star Wars Universe'
characterButton.textContent = 'See the characters of the Star Wars Universe'

mainHeader.appendChild(crawlButton)
mainHeader.appendChild(planetButton)
mainHeader.appendChild(characterButton)

crawlButton.setAttribute('class', 'active')

crawlButton.addEventListener('click', () => {
    window.location = "../crawl/crawl.html"
})

planetButton.addEventListener('click', () => {
    window.location = "../planets/planets.html"
})

characterButton.addEventListener('click', () => {
    window.location = "../characters/characters.html"
})

films.forEach(function(film) {
    let filmDiv = document.createElement('div')
    let filmTitle = document.createElement('h1')
    let filmCrawl = document.createElement('p')

    filmTitle.textContent = film.title
    filmCrawl.textContent = film.opening_crawl

    filmDiv.appendChild(filmTitle)
    filmDiv.appendChild(filmCrawl)

    mainSection.appendChild(filmDiv)

    filmDiv.setAttribute('class', 'filmDiv')
    filmTitle.setAttribute('class', 'filmTitle')
    filmCrawl.setAttribute('class', 'filmCrawl')
});
