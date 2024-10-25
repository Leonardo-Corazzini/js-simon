const countDown = document.getElementById('countdown')
const gameTitle = document.getElementById('game-title')
const playButton = document.getElementById('play-button')
const instructions = document.getElementById('instructions')
const numberList = document.getElementById('numbers-list')
const answersForm = document.getElementById('answers-form')
const confirmButton = document.getElementById('confirm-button')
const score = document.getElementById('score')
const message = document.getElementById('message')
// const spinner = document.getElementById('spinner')
const restartButton = document.getElementById('restart-button')
const randomNumber = []


// dati utente 
const number1 = document.getElementById('number1')
const number2 = document.getElementById('number2')
const number3 = document.getElementById('number3')
const number4 = document.getElementById('number4')
const number5 = document.getElementById('number5')


playButton.addEventListener('click', function () {
    gameTitle.classList.add('d-none')
    playButton.classList.add('d-none')
    instructions.classList.remove('d-none')

    // creo un count-down
    let count = 5;
    countDown.innerText = count;

    const timer = setInterval(() => {
        countDown.innerText = --count;
        console.log(count)
        if (count === 0) {
            clearInterval(timer)
            userTurn();
        }
    }, 1000);



    // creo 5 numeri random 
    randomNumberGeneratorToArray(1, 50, 5, randomNumber)
    console.log(randomNumber)
    for (let i = 0; i < randomNumber.length; i++) {
        const element = randomNumber[i];

        const liElement = document.createElement('li');

        numberList.append(liElement)
        liElement.innerText = element

    }
})

answersForm.addEventListener('submit', function (event) {
    
    event.preventDefault();

    const userNumbers = [parseInt(number1.value), parseInt(number2.value), parseInt(number3.value), parseInt(number4.value), parseInt(number5.value),]
    console.log(userNumbers)
    score.innerText = `Il tuo punteggio è di ${controlNumberAndScore(userNumbers)}`
    score.classList.remove('d-none')
    message.classList.remove('d-none')
    restartButton.classList.remove('d-none')
})

restartButton.addEventListener('click', function () {
    location.reload();
});



// funzioni

// funzione per generare numeri random
function randomNumberGeneratorToArray(min, max, times = 1, array) {
    for (let i = 0; i < times; i++) {
        let number = Math.floor(Math.random() * max) + min
        array.push(number)
    }
}
function userTurn() {
    console.log('finito il tempo');
    countDown.classList.add('d-none');
    instructions.classList.add('d-none');
    numberList.classList.add('d-none');
    answersForm.classList.remove('d-none');

}
function controlNumberAndScore(array) {
    console.log(array)
    answersForm.classList.add('d-none');
    console.log('sto calcolando il risultato')
    let scoreCount = 0
    for (let i = 0; i < array.length; i++) {

        let userNumber = array[i]

        if (randomNumber.includes(userNumber)) {
            console.log('numero corretto')
            message.innerText += ` ${userNumber},`;
            scoreCount++
        }

    }
    return scoreCount
}