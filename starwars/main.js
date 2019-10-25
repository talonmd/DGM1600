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

crawlButton.addEventListener('click', () => {
    window.location = "crawl/crawl.html"
})

planetButton.addEventListener('click', () => {
    window.location = "planets/planets.html"
})

characterButton.addEventListener('click', () => {
    window.location = "characters/characters.html"
})