const highScoresList = document.querySelector('#highScoreList')
const highScores = JSON.parse(localStorage.getItem('highScores')) || []

// localStorage.clear();

console.log(highScores)
theList = ""

highScores.map(score => {
    // highScoresList.appendChild();

    theList += `<li class="high-score" >${score.name} - ${score.score}</li>`
})
console.log(theList);


highScoresList.innerHTML = theList


// highScoresList.innerHTML =
//     highScores.map(score => {
//         return `<li class="high-score" >${score.name} - ${score.score}</li> `
//     }).join('')