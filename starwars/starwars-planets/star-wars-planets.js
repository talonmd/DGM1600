import { planets } from '/starwars/assets/planets.js'

let mainArea = document.querySelector('main')

planets.forEach((planet) => {
    let planetDiv = document.createElement('div')
    let planetTitle = document.createElement('h3')
    let planetPic = document.createElement('img')
    let planetInfoDiv = document.createElement('div')

    // ----- PULLING INFORMATION ON THE PLANETS 
    let planetPopulation = document.createElement('p')
    planetPopulation.textContent = `POPULATION: ${planet.population}`
    let planetRotation = document.createElement('p')
    planetRotation.textContent = `ROTATION PERIOD: ${planet.rotation_period}`
    let planetOrbit = document.createElement('p')
    planetOrbit.textContent = `ORBITAL PERIOD: ${planet.orbital_period}`
    let planetClimate = document.createElement('p')
    planetClimate.textContent = `CLIMATE: ${planet.climate}`
    let planetGravity = document.createElement('p')
    planetGravity.textContent = `GRAVITY: ${planet.gravity}`
    let planetTerrain = document.createElement('p')
    planetTerrain.textContent = `TERRAIN TYPES: ${planet.terrain}`
    let planetTitle2 = document.createElement('h3')
    planetTitle2.textContent = planet.name
    // ----- //

    planetPic.setAttribute('class', 'planetPic')
    planetDiv.setAttribute('class', 'planetDiv')
    planetInfoDiv.setAttribute('class', 'planet-info-div')

    let charNum = getCharNumber(planet.url)

    planetTitle.textContent = planet.name
    planetPic.src = `https://starwars-visualguide.com/assets/img/planets/${charNum}.jpg`
    planetPic.addEventListener('error', (event) => {
        let badImage = event.target
        badImage.src = '../resources/planet.jpg'
    })

    planetDiv.appendChild(planetTitle)
    planetDiv.appendChild(planetPic)
    planetDiv.appendChild(planetInfoDiv)

    // ----- APPENDING PLANET INFORMATION
    planetInfoDiv.appendChild(planetTitle2)
    planetInfoDiv.appendChild(planetPopulation)
    planetInfoDiv.appendChild(planetRotation)
    planetInfoDiv.appendChild(planetOrbit)
    planetInfoDiv.appendChild(planetClimate)
    planetInfoDiv.appendChild(planetGravity)
    planetInfoDiv.appendChild(planetTerrain)
    // ----- //

    mainArea.appendChild(planetDiv)
    planetDiv.setAttribute('style', 'display: none;')
})

function getCharNumber(charURL) {
    let end = charURL.lastIndexOf('/')
    let charID = charURL.substring(end - 2, end)

    if (charID.indexOf('/') !== -1) {
        return charID.slice(1, 2)
    } else {
        return charID
    }
}

// ---------- FILTERING BY CLIMATE CODE DOWN BELOW

const temperate = planets.filter(planet => planet.climate === 'temperate' && 'arid, temperate, tropical' && 'tropical, temperate' && 'temperate, artic' && 'temperate, arid, subartic' && 'arid, temperate, tropical' && 'temperate, moist' && 'temperate, arid, windy' && 'temperate, arid' && 'temperate, tropical')

const tropical = planets.filter(planet => planet.climate === 'tropical' && 'arid, temperate, tropical' && 'tropical, temperate' && 'arid, temperate, tropical' && 'temperate, tropical')

const frozen = planets.filter(planet => planet.climate === 'frozen')

const arid = planets.filter(planet => planet.climate === 'arid, temperate, tropical' && 'temperate, arid, subartic' && 'arid, temperate, tropical' && 'temperate, arid, windy' && 'temperate, arid' && 'arid, rocky, windy')

const windy = planets.filter(planet => planet.climate === 'temperate, arid, windy' && 'arid, rocky, windy')

const hot = planets.filter(planet => planet.climate === 'hot' && 'hot, humid')

const artificialTemperate = planets.filter(planet => planet.climate === 'artificial temperate')

const frigid = planets.filter(planet => planet.climate === 'frigid')

const humid = planets.filter(planet => planet.climate === 'hot, humid')

const polluted = planets.filter(planet => planet.climate === 'polluted')

const unknown = planets.filter(planet => planet.climate === 'unknown')

const superheated = planets.filter(planet => planet.climate === 'superheated')

const subarctic = planets.filter(planet => planet.climate === 'temperate, arid, subartic')

const rocky = planets.filter(planet => planet.climate === 'arid, rocky, windy')

const arctic = planets.filter(planet => planet.climate === 'temperate, artic')

console.log(temperate)

const allDivs = Array.from(document.getElementsByClassName('planetDiv'))

const temperateButton = document.querySelector('.temperate')
const tropicalButton = document.querySelector('.tropical')
const frozenButton = document.querySelector('.frozen')
const aridButton = document.querySelector('.arid')
const windyButton = document.querySelector('.windy')
const hotButton = document.querySelector('.hot')
const artTempButton = document.querySelector('.artificialtemperate')
const frigidButton = document.querySelector('.frigid')
const humidButton = document.querySelector('.humid')
const pollutedButton = document.querySelector('.polluted')
const unknownButton = document.querySelector('.unknown')
const superheatedButton = document.querySelector('.superheated')
const subarticButton = document.querySelector('.subartic')
const rockyButton = document.querySelector('.rocky')
const articButton = document.querySelector('.artic')

const hiddenMessage = document.querySelector('.hidden')

temperateButton.addEventListener('click', () => {
    temperate.forEach(planet => {
        let matchedDiv = allDivs.find((matchingDivs) => {
            return matchingDivs.firstChild.textContent === planet.name
        })
        matchedDiv.setAttribute('style', 'display: block;')
        hiddenMessage.setAttribute('style', 'display: block;')
    })
})

tropicalButton.addEventListener('click', () => {
    tropical.forEach(planet => {
        let matchedDiv = allDivs.find((matchingDivs) => {
            return matchingDivs.firstChild.textContent === planet.name
        })
        matchedDiv.setAttribute('style', 'display: block;')
        hiddenMessage.setAttribute('style', 'display: block;')
    })
})

frozenButton.addEventListener('click', () => {
    frozen.forEach(planet => {
        let matchedDiv = allDivs.find((matchingDivs) => {
            return matchingDivs.firstChild.textContent === planet.name
        })
        matchedDiv.setAttribute('style', 'display: block;')
        hiddenMessage.setAttribute('style', 'display: block;')
    })
})

aridButton.addEventListener('click', () => {
    arid.forEach(planet => {
        let matchedDiv = allDivs.find((matchingDivs) => {
            return matchingDivs.firstChild.textContent === planet.name
        })
        matchedDiv.setAttribute('style', 'display: block;')
        hiddenMessage.setAttribute('style', 'display: block;')
    })
})

windyButton.addEventListener('click', () => {
    windy.forEach(planet => {
        let matchedDiv = allDivs.find((matchingDivs) => {
            return matchingDivs.firstChild.textContent === planet.name
        })
        matchedDiv.setAttribute('style', 'display: block;')
        hiddenMessage.setAttribute('style', 'display: block;')
    })
})

hotButton.addEventListener('click', () => {
    hot.forEach(planet => {
        let matchedDiv = allDivs.find((matchingDivs) => {
            return matchingDivs.firstChild.textContent === planet.name
        })
        matchedDiv.setAttribute('style', 'display: block;')
        hiddenMessage.setAttribute('style', 'display: block;')
    })
})

artTempButton.addEventListener('click', () => {
    artificialTemperate.forEach(planet => {
        let matchedDiv = allDivs.find((matchingDivs) => {
            return matchingDivs.firstChild.textContent === planet.name
        })
        matchedDiv.setAttribute('style', 'display: block;')
        hiddenMessage.setAttribute('style', 'display: block;')
    })
})

frigidButton.addEventListener('click', () => {
    frigid.forEach(planet => {
        let matchedDiv = allDivs.find((matchingDivs) => {
            return matchingDivs.firstChild.textContent === planet.name
        })
        matchedDiv.setAttribute('style', 'display: block;')
        hiddenMessage.setAttribute('style', 'display: block;')
    })
})

humidButton.addEventListener('click', () => {
    humid.forEach(planet => {
        let matchedDiv = allDivs.find((matchingDivs) => {
            return matchingDivs.firstChild.textContent === planet.name
        })
        matchedDiv.setAttribute('style', 'display: block;')
        hiddenMessage.setAttribute('style', 'display: block;')
    })
})

pollutedButton.addEventListener('click', () => {
    polluted.forEach(planet => {
        let matchedDiv = allDivs.find((matchingDivs) => {
            return matchingDivs.firstChild.textContent === planet.name
        })
        matchedDiv.setAttribute('style', 'display: block;')
        hiddenMessage.setAttribute('style', 'display: block;')
    })
})

unknownButton.addEventListener('click', () => {
    unknown.forEach(planet => {
        let matchedDiv = allDivs.find((matchingDivs) => {
            return matchingDivs.firstChild.textContent === planet.name
        })
        matchedDiv.setAttribute('style', 'display: block;')
        hiddenMessage.setAttribute('style', 'display: block;')
    })
})

superheatedButton.addEventListener('click', () => {
    superheated.forEach(planet => {
        let matchedDiv = allDivs.find((matchingDivs) => {
            return matchingDivs.firstChild.textContent === planet.name
        })
        matchedDiv.setAttribute('style', 'display: block;')
        hiddenMessage.setAttribute('style', 'display: block;')
    })
})

subarticButton.addEventListener('click', () => {
    subarctic.forEach(planet => {
        let matchedDiv = allDivs.find((matchingDivs) => {
            return matchingDivs.firstChild.textContent === planet.name
        })
        matchedDiv.setAttribute('style', 'display: block;')
        hiddenMessage.setAttribute('style', 'display: block;')
    })
})

rockyButton.addEventListener('click', () => {
    rocky.forEach(planet => {
        let matchedDiv = allDivs.find((matchingDivs) => {
            return matchingDivs.firstChild.textContent === planet.name
        })
        matchedDiv.setAttribute('style', 'display: block;')
        hiddenMessage.setAttribute('style', 'display: block;')
    })
})

articButton.addEventListener('click', () => {
    arctic.forEach(planet => {
        let matchedDiv = allDivs.find((matchingDivs) => {
            return matchingDivs.firstChild.textContent === planet.name
        })
        matchedDiv.setAttribute('style', 'display: block;')
        hiddenMessage.setAttribute('style', 'display: block;')
    })
})


