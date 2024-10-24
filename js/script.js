const countDown = document.getElementById('countdown')
const gameTitle = document.getElementById('game-title')
const playButton = document.getElementById('play-button')
const instructions = document.getElementById('instructions')


playButton.addEventListener('click', function () {
    
    gameTitle.classList.add('d-none')
    playButton.classList.add('d-none')
    instructions.classList.remove('d-none')

    // creo un count-down
    let count = 30;
    countDown.innerText = count;
    
    const timer = setInterval(() => {
        countDown.innerText = --count;
    }, 1000);

    // if (count = 0){
    //     clearInterval(timer);  
    // }

    // creo 5 numeri random 
    
    randomNumberGenerator(1, 50, 5,randomNumber)
    console.log(randomNumber)

})

 const randomNumber = []


// funzioni
// funzione per generare numeri random
function randomNumberGenerator(min, max, times = 1,array) {
    for (let i = 0; i < times; i++) {
        let number = Math.floor(Math.random() * max) + min
        array.push(number)
    }
}

