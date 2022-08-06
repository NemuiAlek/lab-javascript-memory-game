class MemoryGame {
  constructor(cards) {
    this.cards = cards;
    this.pickedCards= [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
  }

  shuffleCards() {
    let cCard, zRandomIndex
      for (let i=this.cards.length - 1; i>0; i--){
        zRandomIndex = Math.floor(Math.random()*(i+1));
         cCard = this.cards[i];
         this.cards[i] = this.cards[zRandomIndex];
         this.cards[zRandomIndex] = cCard;
      }
      return this.cards
  }

  checkIfPair(card1, card2) {
    if (card1 === card2){
      this.pairsClicked += 1
      this.pairsGuessed += 1
      return true
    } else {
      this.pairsClicked += 1
      return false
    }
  }

  checkIfFinished() {
    if (this.pairsGuessed === 12){
      lockBoard = true
      // return alert(`YOU WON!!!!!`)
      document.getElementById(`modal`).style.display = `block`
      setTimeout(() => {
        document.getElementById(`modal-content`).classList.add(`hold`)
      }, 1400);
    } 
  }
}
