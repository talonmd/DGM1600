import { people } from '../assets/people.js'

let mainSection = document.querySelector('main')

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

    /* ----- PUTTING TOGETHER THE MOUSE OVER INFORMATION ----- */
});

mainSection.appendChild(peopleGridDiv)

function getCharNumber(charURL) {
    let end = charURL.lastIndexOf('/')
    let charID = charURL.substring(end - 2, end)

    if (charID.indexOf('/') !== -1) {
        return charID.slice(1, 2)
    } else {
        return charID
    }
}

// filter stuff down below

const maleCharacters = people.filter(person => person.gender === 'male')
const femaleCharacters = people.filter(person => person.gender === 'female')
const otherCharacters = people.filter(person => person.gender !== 'female' & person.gender !== 'male')

const allDivs = Array.from(document.getElementsByClassName('charDivs'))

maleButton.addEventListener('click', () => {
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

})