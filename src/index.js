// Variables
let firstCard;
let lockBoard = false;


const cards = [
  { name: 'aquaman', img: 'aquaman.jpg' },
  { name: 'batman', img: 'batman.jpg' },
  { name: 'captain america', img: 'captain-america.jpg' },
  { name: 'fantastic four', img: 'fantastic-four.jpg' },
  { name: 'flash', img: 'flash.jpg' },
  { name: 'green arrow', img: 'green-arrow.jpg' },
  { name: 'green lantern', img: 'green-lantern.jpg' },
  { name: 'ironman', img: 'ironman.jpg' },
  { name: 'spiderman', img: 'spiderman.jpg' },
  { name: 'superman', img: 'superman.jpg' },
  { name: 'the avengers', img: 'the-avengers.jpg' },
  { name: 'thor', img: 'thor.jpg' },
  { name: 'aquaman', img: 'aquaman.jpg' },
  { name: 'batman', img: 'batman.jpg' },
  { name: 'captain america', img: 'captain-america.jpg' },
  { name: 'fantastic four', img: 'fantastic-four.jpg' },
  { name: 'flash', img: 'flash.jpg' },
  { name: 'green arrow', img: 'green-arrow.jpg' },
  { name: 'green lantern', img: 'green-lantern.jpg' },
  { name: 'ironman', img: 'ironman.jpg' },
  { name: 'spiderman', img: 'spiderman.jpg' },
  { name: 'superman', img: 'superman.jpg' },
  { name: 'the avengers', img: 'the-avengers.jpg' },
  { name: 'thor', img: 'thor.jpg' }
];

const memoryGame = new MemoryGame(cards);

memoryGame.shuffleCards()


window.addEventListener('load', (event) => {
  let html = '';
  memoryGame.cards.forEach((pic) => {
    html += `
      <div class="card turned" data-card-name="${pic.name}">
      <div class="back" name="${pic.img}"></div>
        <div class="front" style="background: url('./img/${pic.img}') no-repeat"></div>
      </div>
    `;
  });

  setTimeout(() => {
    document.querySelectorAll('.card').forEach((card) =>
    card.classList.remove(`turned`)
  )}, 10000);

  // Add all the divs to the HTML
  document.querySelector('#memory-board').innerHTML = html;


  // Bind the click event of each element to a function
  document.querySelectorAll('.card').forEach((card) => {
    card.addEventListener('click', () => {

      if (lockBoard || card.classList.contains(`turned`)) {
        return
      }

      memoryGame.pickedCards.push(card.getAttribute("data-card-name"))
      card.classList.add(`turned`)

      if(memoryGame.pickedCards.length === 1){
          firstCard = card
      }else if (memoryGame.pickedCards.length === 2){
        lockBoard = true;
        if (memoryGame.checkIfPair(memoryGame.pickedCards[0], memoryGame.pickedCards[1])){
          lockBoard = false;
        } else {
         setTimeout(() => {card.classList.remove(`turned`), firstCard.classList.remove(`turned`), lockBoard=false;},1000);
        }
         document.getElementById(`pairs-clicked`).innerHTML = memoryGame.pairsClicked;
         document.getElementById(`pairs-guessed`).innerHTML = memoryGame.pairsGuessed;
         memoryGame.pickedCards = [];
         memoryGame.checkIfFinished();
      }
      // console.log(memoryGame.pickedCards)
    });
  });
});

document.getElementsByClassName(`close`)[0].addEventListener(`click`,() => {
  document.getElementById(`modal`).style.display = `none`
})

let konamiArray = []
window.addEventListener(`keydown`,(event) => {
  if(event.code === `ArrowUp` || event.code === `ArrowDown` || event.code === `ArrowLeft`
    || event.code === `ArrowRight` || event.code === `KeyA` || event.code === `KeyB`){
    konamiArray.push(event.code);
  } else {
    konamiArray = [];
  }

  if(
    konamiArray[0] === `ArrowUp` &&
    konamiArray[1] === `ArrowUp` &&
    konamiArray[2] === `ArrowDown` &&
    konamiArray[3] === `ArrowDown` &&
    konamiArray[4] === `ArrowLeft` &&
    konamiArray[5] === `ArrowRight` &&
    konamiArray[6] === `ArrowLeft` &&
    konamiArray[7] === `ArrowRight` &&
    konamiArray[8] === `KeyB` &&
    konamiArray[9] === `KeyA`
    ){
      // console.log(`success!!`);
    memoryGame.pairsGuessed = 12;
    memoryGame.checkIfFinished();
  }
})
