class MemoryGame {
  constructor(cards) {
    this.cards = cards;
    this.pickedCards= [];
    this.pairsClicked = 100;
    this.pairsGuessed = 100;
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
    
  }

  checkIfFinished() {
    // ... write your code here
  }
}
