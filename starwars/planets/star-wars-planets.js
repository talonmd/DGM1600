import { planets } from '../assets/planets'

let mainArea = document.querySelector('main')
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

planetButton.setAttribute('class', 'active')

crawlButton.addEventListener('click', () => {
    window.location = "../crawl/crawl.html"
})

planetButton.addEventListener('click', () => {
    window.location = "../planets/planets.html"
})

characterButton.addEventListener('click', () => {
    window.location = "../characters/characters.html"
})

planets.forEach((planet) => {
    let planetDiv = document.createElement('div')
    let planetTitle = document.createElement('h3')
    let planetInfo = document.createElement('p')
    let planetPic = document.createElement('img')

    planetPic.setAttribute('class', 'planetPic')
    planetDiv.setAttribute('class', 'planetDiv')

    let charNum = getCharNumber(planet.url) 
    
    planetTitle.textContent = planet.name
    planetInfo.textContent = `Population: ${planet.population}`
    planetPic.src = `https://starwars-visualguide.com/assets/img/planets/${charNum}.jpg`

    planetPic.addEventListener('error', (event) => {
        let badImage = event.target
        badImage.src = '../resources/planet.jpg'
    })

    planetDiv.appendChild(planetTitle)
    planetDiv.appendChild(planetInfo)
    planetDiv.appendChild(planetPic)

    mainArea.appendChild(planetDiv)  
});

function getCharNumber(charURL) {
    let end = charURL.lastIndexOf('/')
    let charID = charURL.substring(end -2, end)

    if(charID.indexOf('/') !== -1 ) {
        return charID.slice(1,2)
    } else {
        return charID
    }
}
