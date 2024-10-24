const countDown = document.getElementById('countdown')
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
const randomNumber = []
for(let i = 0; i < 5; i++){
    let number =  Math.floor(Math.random() * 50) + 1
    randomNumber.push(number)
}
 console.log(randomNumber)