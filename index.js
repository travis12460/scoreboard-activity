let homeScore = 0
let awayScore = 0
let homeEl = document.getElementById("home-score")
let awayEl = document.getElementById("away-score")

function homePlusOne() {
    homeScore++
    homeEl.textContent = homeScore
}
function homePlusTwo() {
    homeScore += 2
    homeEl.textContent = homeScore
}
function homePlusThree() {
    homeScore += 3
    homeEl.textContent = homeScore
}
function awayPlusOne() {
    awayScore++
    awayEl.textContent = awayScore
}
function awayPlusTwo() {
    awayScore += 2
    awayEl.textContent = awayScore
}
function awayPlusThree() {
    awayScore += 3
    awayEl.textContent = awayScore
}

function reset() {
    homeScore = 0
    awayScore = 0
    homeEl.textContent = homeScore
    awayEl.textContent = awayScore
}

