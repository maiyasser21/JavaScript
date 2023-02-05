const Score = document.getElementById('Score');
const chess = document.getElementById('chessboard');
const randomDiv = document.getElementById('randomDiv');
const numArray = ['1', '2', '3', '4', '5', '6', '7', '8'];
const strArray = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
let userTarget;
let gameScore = 0;
let flagON = false;

function randomID() {
   let randomNum = Math.floor(Math.random() * numArray.length);
   let radnomStr = Math.floor(Math.random() * strArray.length);
   randomDiv.innerText = `${strArray[radnomStr]}${numArray[randomNum]}`;
   return `${strArray[radnomStr]}${numArray[randomNum]}`;
}

for (let i = 0; i < 8; i++) {
   for (let j = 0; j < 8; j++) {
      let index = `${strArray[j]}${numArray[7 - i]}`
      var squares = document.createElement('div')
      squares.id = index;
      if (j === 0) {
         squares.insertAdjacentHTML("afterbegin", numArray[7 - i]);
      }
      if (i === 7) {
         squares.insertAdjacentHTML("afterbegin", strArray[j]);
      }
      squares.className = 'chesssquare';
      squares.addEventListener('click', (event) => { GameCheck(event.target.id) })
      if ((i + j) % 2 == 0) {
         squares.style.backgroundColor = '#ffff';
      }
      chess.appendChild(squares);
   }
}

let counter = 30;

function getTime() {
   flagON = true;
   userTarget = randomID();
   let intervalID = setInterval(() => {
      if (counter > 0) {
         counter--;
         Score.innerText=`Score: ${gameScore}`;
         document.getElementById('counter').innerText = `00:${counter}`;

      }
      else {
         clearInterval(intervalID);
         flagON = false;
         document.getElementById('counter').innerText = `00:00`;
         randomDiv.innerText = "";


      }
   }, 1000);


}
function GameCheck(userInput) {
   if (flagON) {
      if (userInput === userTarget) {
         console.log("true");
         gameScore++;
         userTarget = randomID();
      }
      else {
         console.log("wrong");
         userTarget = randomID();
      }
   }
}


