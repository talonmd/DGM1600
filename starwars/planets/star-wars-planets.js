import { planets } from '/starwars/assets/planets.js'

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
    planetDiv.setAttribute('style', 'display: none;') 
})

function getCharNumber(charURL) {
    let end = charURL.lastIndexOf('/')
    let charID = charURL.substring(end -2, end)

    if(charID.indexOf('/') !== -1 ) {
        return charID.slice(1,2)
    } else {
        return charID
    }
}

// ---------- FILTER CODE DOWN BELOW

const temperate = planets.filter(planet => planet.climate === 'temperate' && 'arid, temperate, tropical' && 'tropical, temperate' && 'temperate, artic' && 'temperate, arid, subartic' && 'arid, temperate, tropical' && 'temperate, moist' && 'temperate, arid, windy' && 'temperate, arid' && 'temperate, tropical')

const tropical = planets.filter(planet => planet.climate === 'tropical' && 'arid, temperate, tropical' && 'tropical, temperate' && 'arid, temperate, tropical' && 'temperate, tropical')

const frozen = planets.filter(planet => planet.climate === 'frozen')

const arid = planets.filter(planet => planet.climate === 'arid' && 'arid, temperate, tropical' && 'temperate, arid, subartic' && 'arid, temperate, tropical' && 'temperate, arid, windy' && 'temperate, arid' && 'arid, rocky, windy')

const windy = planets.filter(planet => planet.climate === 'windy' && 'temperate, arid, windy' && 'arid, rocky, windy')

const hot = planets.filter(planet => planet.climate === 'hot' && 'hot, humid')

const artificialTemperate = planets.filter(planet => planet.climate === 'artificial temperate')

const frigid = planets.filter(planet => planet.climate === 'frigid')

const humid = planets.filter(planet => planet.climate === 'humid' && 'hot, humid')

const polluted = planets.filter(planet => planet.climate === 'polluted')

const unknown = planets.filter(planet => planet.climate === 'unknown')

const superheated = planets.filter(planet => planet.climate === 'superheated')

const subarctic = planets.filter(planet => planet.climate === 'subarctic' && 'temperate, arid, subartic')

const rocky = planets.filter(planet => planet.climate === 'rocky' && 'arid, rocky, windy')

const arctic = planets.filter(planet => planet.climate === 'artic' && 'temperate, artic')

console.log(temperate)

const allDivs = Array.from(document.getElementsByClassName('planetDiv'))

const temperateButton = document.querySelector('.temperate')
const tropicalButton = document.querySelector('.tropical')
const frozenButton = document.querySelector('.frozen')
const aridButton = document.querySelector('.arid')
const windyButton = document.querySelector('.windy')
const temperateButton = document.querySelector('.temperate')
const temperateButton = document.querySelector('.temperate')
const temperateButton = document.querySelector('.temperate')
const temperateButton = document.querySelector('.temperate')
const temperateButton = document.querySelector('.temperate')
const temperateButton = document.querySelector('.temperate')
const temperateButton = document.querySelector('.temperate')
const temperateButton = document.querySelector('.temperate')
const temperateButton = document.querySelector('.temperate')
const temperateButton = document.querySelector('.temperate')


temperateButton.addEventListener('click', () => {
    temperate.forEach(planet => {
        let matchedDiv = allDivs.find((matchingDivs) => {
            return matchingDivs.firstChild.textContent === planet.name
        })
    matchedDiv.setAttribute('style', 'display: block;')
    })
})

/*
    otherCharacters.forEach(character => {

        let matchedDiv = allDivs.find((matchingDivs) => {
            return matchingDivs.firstChild.textContent === character.name
        })
        matchedDiv.setAttribute('style', 'display: none;')
    })

    maleCharacters.forEach(character => {
        let matchedDiv = allDivs.find((matchingDivs) => {
            return matchingDivs.firstChild.textContent === character.name
        })
        matchedDiv.setAttribute('style', 'display: revert;')
    })

})

femaleButton.addEventListener('click', () => {
    maleCharacters.forEach(character => {

        let matchedDiv = allDivs.find((matchingDivs) => {
            return matchingDivs.firstChild.textContent === character.name
        })

        matchedDiv.setAttribute('style', 'display: none;')

    })

    otherCharacters.forEach(character => {

        let matchedDiv = allDivs.find((matchingDivs) => {
            return matchingDivs.firstChild.textContent === character.name
        })
        matchedDiv.setAttribute('style', 'display: none;')
    })

    femaleCharacters.forEach(character => {
        let matchedDiv = allDivs.find((matchingDivs) => {
            return matchingDivs.firstChild.textContent === character.name
        })
        matchedDiv.setAttribute('style', 'display: revert;')
    })

})

otherButton.addEventListener('click', () => {
    maleCharacters.forEach(character => {

        let matchedDiv = allDivs.find((matchingDivs) => {
            return matchingDivs.firstChild.textContent === character.name
        })

        matchedDiv.setAttribute('style', 'display: none;')

    })

    femaleCharacters.forEach(character => {

        let matchedDiv = allDivs.find((matchingDivs) => {
            return matchingDivs.firstChild.textContent === character.name
        })
        matchedDiv.setAttribute('style', 'display: none;')
    })

    otherCharacters.forEach(character => {
        let matchedDiv = allDivs.find((matchingDivs) => {
            return matchingDivs.firstChild.textContent === character.name
        })
        matchedDiv.setAttribute('style', 'display: revert;')
    })

}) */