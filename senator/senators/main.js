// function to retrieve API data
async function getAPIData(url) {
    try {
        const response = await fetch(url)
        const data = await response.json()
        return data
    } catch (error) {
        console.error(error)
    }
}

// using the returned async data
let allSenators = []
let simpleSenators = []
let republicans = []
let democrats = []
let independents = []

const theData = getAPIData('senators.json').then(data => {
    allSenators = data.results[0].members
    simpleSenators = makeSimpleMap(allSenators)
    republicans = filterSenators(simpleSenators, "R")
    democrats = filterSenators(simpleSenators, "D")
    independents = filterSenators(simpleSenators, "ID")
    populateDOM(simpleSenators)

    const absoluteTotalVotes = totalVotes(simpleSenators)
    attatchAbsoluteTotal(absoluteTotalVotes)
    const republicansTotalVotes = totalVotes(republicans)
    attatchRepublicanInfoToHeader(republicansTotalVotes)
    const democratsTotalVotes = totalVotes(democrats)
    attatchDemocratInfoToHeader(democratsTotalVotes)
    const independentsTotalVotes = totalVotes(independents)
    attatchIndependentInfoToHeader(independentsTotalVotes)
})

function attatchAbsoluteTotal(information) {
    let headerArea = document.querySelector('header')
    let headerAbsoluteDiv = document.createElement('div')
    headerAbsoluteDiv.setAttribute('class', 'absolute-div')
    let totalVotesInfo = document.createElement('p')

    totalVotesInfo.textContent = `Total Combined Votes: ${information}`
    headerAbsoluteDiv.appendChild(totalVotesInfo)
    headerArea.appendChild(headerAbsoluteDiv)
}

function attatchRepublicanInfoToHeader(information) {
    let headerArea = document.querySelector('header')
    let headerRepublicanDiv = document.createElement('div')
    headerRepublicanDiv.setAttribute('class', 'republican-div')
    let totalVotesInfo = document.createElement('p')

    totalVotesInfo.textContent = `Total Republican Votes: ${information}`
    headerRepublicanDiv.appendChild(totalVotesInfo)
    headerArea.appendChild(headerRepublicanDiv)
}

function attatchDemocratInfoToHeader(information) {
    let headerArea = document.querySelector('header')
    let headerDemocratDiv = document.createElement('div')
    headerDemocratDiv.setAttribute('class', 'democrat-div')
    let totalVotesInfo = document.createElement('p')
    totalVotesInfo.textContent = `Total Democrat Votes: ${information}`
    headerDemocratDiv.appendChild(totalVotesInfo)
    headerArea.appendChild(headerDemocratDiv)
}

function attatchIndependentInfoToHeader(information) {
    let headerArea = document.querySelector('header')
    let headerIndependentDiv = document.createElement('div')
    headerIndependentDiv.setAttribute('class', 'independent-div')
    let totalVotesInfo = document.createElement('p')
    totalVotesInfo.textContent = `Total Independent Votes: ${information}`
    headerIndependentDiv.appendChild(totalVotesInfo)
    headerArea.appendChild(headerIndependentDiv)
}


// mapping the json file array, creating a new array, with only the items that I want to be in it
function makeSimpleMap(allOfThem) {
    let results = allOfThem.map(senator => {
        return {
            id: senator.id,
            name: `${senator.first_name} ${senator.last_name}`,
            party: senator.party,
            age: `${calculate_age(new Date(senator.date_of_birth))}`,
            gender: senator.gender,
            total_votes: senator.total_votes,
            missed_votes: senator.missed_votes,
            votes_with_party_pct: senator.votes_with_party_pct,
        }
    })
    return results
}

// filtering the senators by party affiliation
function filterSenators(simpleList, partyAffiliation) {
    return simpleList.filter(senator => senator.party === partyAffiliation)
}

// using reduce to accumulate the total votes of the senators
function totalVotes(senatorList) {
    const results = senatorList.reduce((acc, senator) => {
        return acc + senator.total_votes
    }, 0)
    return results
}

// using reduce to determine the oldest senator
function oldestSenator(senatorList) {
    return senatorList.reduce((oldest, senator) => {
        return (oldest.age || 0) > senator.age ? oldest : senator
    }, {})
}

// sorting the senators by age
function sortSenatorsByAge(senatorList) {
    return senatorList.sort(function (a, b) {
        return a.age - b.age
    })
}

// filling the cards container and such
const container = document.querySelector('.container')

function populateDOM(senator_array) {
    senator_array.forEach(senator => {

        let card = document.createElement('div')
        card.setAttribute('class', 'card')

        let cardImage = document.createElement('div')
        cardImage.setAttribute('class', 'card-image')

        let figure = document.createElement('figure')
        figure.setAttribute('class', 'image')

        // ----- PULLING THE SENATORS IMAGES
        let figureImage = document.createElement('img')
        figureImage.src = `https://www.congress.gov/img/member/${senator.id.toLowerCase()}_200.jpg`
        figureImage.alt = 'Placeholder image'
        figureImage.addEventListener('error', (event) => {
            let badImage = event.target
            badImage.src = '/senator/senators/images/bane.jpg'
        })
        // ----- //

        figure.appendChild(figureImage)
        cardImage.appendChild(figure)
        card.appendChild(cardImage)
        card.appendChild(cardContent(senator))
        container.appendChild(card)
    })
}

// function to fill up the content of the card
function cardContent(senator) {
    let cardContent = document.createElement('div')
    cardContent.setAttribute('class', 'card-content')
    let media = document.createElement('div')
    media.setAttribute('class', 'media')

    let figure = document.createElement('figure')
    figure.setAttribute('class', 'image is-96x96')
    let img = document.createElement('img')

    if (senator.party === "R") {
        img.src = '/senator/senators/images/elephant.jpeg'
    }
    if (senator.party === "D") {
        img.src = '/senator/senators/images/donkey.jpeg'
    }
    if (senator.party === "ID") {
        img.src = '/senator/senators/images/independent.gif'
    }

    let mediaContent = document.createElement('div')
    mediaContent.setAttribute('class', 'media-content')
    let titleP = document.createElement('h2')
    titleP.setAttribute('class', 'senator-name')
    titleP.textContent = senator.name
    let subtitleP = document.createElement('h3')
    subtitleP.setAttribute('class', 'percentage')
    subtitleP.textContent = `Votes with Party ${senator.votes_with_party_pct}% of the time.`

    // ----- TOTAL AND MISSED VOTES DISPLAYS
    let votesP = document.createElement('p')
    let missedVotesP = document.createElement('p')
    votesP.textContent = `Number of Votes: ${senator.total_votes}`
    missedVotesP.textContent = `Missed Votes: ${senator.missed_votes}`
    // ----- //

    let contentDiv = document.createElement('div')
    contentDiv.setAttribute('class', 'content')
    let contentBreak = document.createElement('br')
    let ageP = document.createElement('p')
    ageP.setAttribute('class', 'age')
    ageP.textContent = `Age: ${senator.age}`

    mediaContent.appendChild(titleP)
    mediaContent.appendChild(ageP)
    mediaContent.appendChild(votesP)
    mediaContent.appendChild(missedVotesP)

    contentDiv.appendChild(img)
    contentDiv.appendChild(subtitleP)

    media.appendChild(mediaContent)

    contentDiv.appendChild(contentBreak)

    cardContent.appendChild(media)
    cardContent.appendChild(contentDiv)

    return cardContent
}

// function to calcuate age based on a birth date
function calculate_age(dob) {
    let diff_ms = Date.now() - dob.getTime();
    let age_dt = new Date(diff_ms);

    return Math.abs(age_dt.getUTCFullYear() - 1970);
}