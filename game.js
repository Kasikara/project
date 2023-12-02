const question = document.querySelector('#question');
const choices = Array.from(document.querySelectorAll('.choice-text'));
const choiceContainers = document.querySelectorAll('.choice-container');
const progressText = document.querySelector('#progressText');
const scoreText = document.querySelector('#score');
const progressBarFull = document.querySelector('#progressBarFull');

let players = []
let currentQuestion = {}
let acceptingAnswers = true
let score = 0
let questionCounter = 0
let availableQuestion = []

let questions =
{
    "0": {
        "question": "What is 2 + 2 ?",
        "choices": ["2", "4", "21", "17"],
        "answer": "2"
    },

    "1": {
        "question": "The tallest building in the world is located in which city ?",
        "choices": ["Dubai", "New York", "Shanghai", "None of the above"],
        "answer": "1"
    },

    "2": {
        "question": "What percent of American adults believe that chocolate milk comes from brown cows?",
        "choices": ["20%", "18%", "7%", "33%"],
        "answer": "3"
    },

    "3": {
        "question": "Approximately what percent of U.S. power outages are caused by squirrels?",
        "choices": ["10-20%", "5-10%", "15-20%", "30-40%"],
        "answer": "1"
    },
}

const SCORE_POINTS = 100
const MAX_QUESTIONS = 4

questionCounter = 0
startGame = () => {
    score = 0
    getNewQuestion()
}

getNewQuestion = () => {
    if (questionCounter >= MAX_QUESTIONS) {
        localStorage.setItem('mostRecentScore', score)

        return window.location.assign('end.html')
    }

    progressText.innerText = `Question ${questionCounter} of ${MAX_QUESTIONS}`
    progressBarFull.style.width = `${(questionCounter / MAX_QUESTIONS) * 100}%`

    const questionIndex = Math.floor(Math.random() * MAX_QUESTIONS)

    currentQuestion = questions[questionCounter - '0']
    question.innerText = questions[questionCounter - '0']["question"]

    let j = 0;
    choices.forEach(choice => {
        choice.innerText = questions[questionCounter - '0']["choices"][j++];
    })

    acceptingAnswers = true
}

let i = 0;
choiceContainers.forEach(choiceContainer => {
    choiceContainer.addEventListener('click', e => {
        // console.log(choiceContainers[i].children[1].textContent);
        if (!acceptingAnswers) return

        let data = e.target
        acceptingAnswers = false

        answerIndex = questions[questionCounter - '0']["answer"];
        correctAnswer = questions[questionCounter - '0']["choices"][answerIndex - 1];
        let classToApply = (correctAnswer == e.target.textContent) ? 'correct' :
            'incorrect'

        if (classToApply == 'correct') {
            incrementScore(SCORE_POINTS)
        }

        e.target.parentElement.classList.add(classToApply)

        setTimeout(() => {
            e.target.parentElement.classList.remove(classToApply)
            questionCounter++;
            i++;

            getNewQuestion()

        }, 1000)
    })
})

incrementScore = num => {
    score += num
    scoreText.innerText = score
}

startGame()