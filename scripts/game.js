let game = {

  lockMode: false,
  firstCard: null,
  secondCard: null,

  setCard: function (id) {

    let card = this.cards.filter(card => card.id===id)[0];
    
    if(card.flipped || this.lockMode) {
      return false;
    }

    if(!this.firstCard) {
      this.firstCard = card;
      return true;
    }else {
      this.secondCard = card;
      this.lockMode = true;
      return true;
    }
  
  },

  checkMatch: function () {
    return this.firstCard.icon === this.secondCard.icon;
  },

  clearCards: function () {
    this.firstCard = null;
    this.secondCard = null;
    this.lockMode = false;
  },

  nations: ['ale',
  'arg',
  'bra',
  'chi',
  'esp',
  'fra',
  'ing',
  'jap',
  'sui',
  'usa'],

  cards: null,

  createCardsFromNations: function () {
    this.cards = [];
  
    this.nations.forEach((nation) =>  {
      this.cards.push(this.createPairFromNations(nation));
    })
  
    this.cards = this.cards.flatMap(pair => pair);
    this.shuffleCards()

    return this.cards;
    
  },
  
  createPairFromNations: function (nation) {
  
    return [{
      id: this.createIdWithNation(nation),
      icon: nation,
      flipped: false,
    }, {
      id: this.createIdWithNation(nation),
      icon: nation,
      flipped: false,
    }]
  
  },
  
  createIdWithNation: function (nation) {
    return nation + parseInt(Math.random() * 1000)
  },

  shuffleCards: function (cards) {
    let currentIndex = this.cards.length;
    let randomIndex = 0;
  
    while (currentIndex !== 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      [this.cards[randomIndex], this.cards[currentIndex]] = [this.cards[currentIndex], this.cards[randomIndex]];
    }
  
  }
  

}

