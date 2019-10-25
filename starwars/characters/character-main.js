import { people } from '../assets/people.js'

// main navigation below

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

characterButton.setAttribute('class', 'active')

crawlButton.addEventListener('click', () => {
    window.location = "../crawl/crawl.html"
})

planetButton.addEventListener('click', () => {
    window.location = "../planets/planets.html"
})

characterButton.addEventListener('click', () => {
    window.location = "../characters/characters.html"
})

// filter buttons below

let mainHeaderDiv = document.createElement('div')
mainHeaderDiv.setAttribute('class', 'filterButtonDiv')

let maleButton = document.createElement('button')
let femaleButton = document.createElement('button')
let otherButton = document.createElement('button')

maleButton.setAttribute('class', 'filterButton')
femaleButton.setAttribute('class', 'filterButton')
otherButton.setAttribute('class', 'filterButton')

maleButton.textContent = "Male Characters"
femaleButton.textContent = "Female Characters"
otherButton.textContent = "Other Characters"

mainHeaderDiv.appendChild(femaleButton)
mainHeaderDiv.appendChild(maleButton)
mainHeaderDiv.appendChild(otherButton)

mainSection.appendChild(mainHeaderDiv)

// putting the people pictures in below

let peopleGridDiv = document.createElement('div')
peopleGridDiv.setAttribute('class', 'peopleGridDiv')

people.forEach((person) => {
    let personDiv = document.createElement('div')
    let name = document.createElement('h3')
    let gender = document.createElement('p')
    let picture = document.createElement('img')

    personDiv.setAttribute('class', 'charDivs')
    picture.setAttribute('class', 'picDivs')

    let charNum = getCharNumber(person.url) 
    
    name.textContent = person.name
    gender.textContent = `Gender: ${person.gender}`
    picture.src = `https://starwars-visualguide.com/assets/img/characters/${charNum}.jpg`

    personDiv.appendChild(name)
    personDiv.appendChild(gender)
    personDiv.appendChild(picture)

    peopleGridDiv.appendChild(personDiv)  
});

mainSection.appendChild(peopleGridDiv)

function getCharNumber(charURL) {
    let end = charURL.lastIndexOf('/')
    let charID = charURL.substring(end -2, end)

    if(charID.indexOf('/') !== -1 ) {
        return charID.slice(1,2)
    } else {
        return charID
    }
}

// filter stuff down below

const maleCharacters = people.filter(person => person.gender === 'male')
const femaleCharacters = people.filter(person => person.gender === 'female')
const otherCharacters = people.filter(person => person.gender !== 'female' & person.gender !== 'male')

console.log(maleCharacters)

const allDivs = Array.from(document.getElementsByClassName('charDivs'))

console.log(allDivs)

maleButton.addEventListener('click', () => {
    maleCharacters.forEach(character => {

    let matchedDiv = allDivs.find((matchingDivs) => {         // filter
        return matchingDivs.firstChild.textContent !== character.name
    })

    matchedDiv.setAttribute('style', 'display: none;')


    // matchedDiv[0].setAttribute("style", "display: none") //display: none
    /* matchedDiv.className = 'class name' 
    if(matchedDiv.getAttribute('style') === "display: none;") {
        matchedDiv.setAttribute("style", "display: revert;")
    }
    */
})
})

otherButton.addEventListener('click', () => {
    otherCharacters.forEach(character => {

    let matchedDiv = allDivs.find((matchingDivs) => {         // filter
        return matchingDivs.firstChild.textContent !== character.name
    })

    matchedDiv.setAttribute('style', 'display: none;')
})
})

femaleButton.addEventListener('click', () => {
    femaleCharacters.forEach(character => {

    let matchedDiv = allDivs.find((matchingDivs) => {         // filter
        return matchingDivs.firstChild.textContent !== character.name
    })

    matchedDiv.setAttribute('style', 'display: none;')
})
})