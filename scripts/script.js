const front = "card_front";
const back = "card_back";
const card = "card";
const icon = "icon";

startGame();

function startGame() {

  initializeCards(game.createCardsFromNations());

}

function initializeCards(cards) {
  let gameBoard = document.getElementById("gameBoard");
  gameBoard.innerHTML = "";
  game.cards.forEach(card => {
    
    let cardElement = document.createElement('div');
    cardElement.id = card.id;
    cardElement.classList.add('card');
    cardElement.dataset.icon = card.icon;

    createCardContent(card, cardElement);

    cardElement.addEventListener('click', flipCard)
    gameBoard.appendChild(cardElement);

  })

}

function createCardContent(card, cardElement) {

  createCardFace(front, card, cardElement);
  createCardFace(back, card, cardElement)

}

function createCardFace(face, card, element) {

  let cardElementFace = document.createElement('div');
  cardElementFace.classList.add(face);

  if(face === front) {
    let iconElement = document.createElement('img');
    iconElement.classList.add(icon);
    iconElement.src = "./assets/images/" + card.icon + ".png";
    cardElementFace.appendChild(iconElement);
  } else {
    let iconElement2 = document.createElement('img');
    iconElement2.src = "./assets/images/olympic.png";
    cardElementFace.appendChild(iconElement2);
  } 

  element.appendChild(cardElementFace);

}

function flipCard() {

  if(game.firstMove) {
    game.timer();
    game.firstMove=false;
  }

  if(game.setCard(this.id)){

    this.classList.add("flip");

    if(game.secondCard) {
      if(game.checkMatch()) {
          game.clearCards();
          if (game.checkGameOver()) {
            clearInterval(control);
            let gameOverLayer = document.getElementById("gameOver")
            gameOverLayer.style.display = 'flex';
          }
        } else {  
          setTimeout(() => {
            let firstCardView = document.getElementById(game.firstCard.id);
            let secondCardView = document.getElementById(game.secondCard.id);
    
            firstCardView.classList.remove('flip');
            secondCardView.classList.remove('flip');
            game.unflipCards();
          }, 1000);
        };
    }

  }

}

function restart() {
  startGame();
  game.minutos = 0;
  game.segundos = 0;
  game.tries = 0;
  setClock();
  setTries();
  let gameOverLayer = document.getElementById("gameOver")
  gameOverLayer.style.display = 'none';
}

function setClock () {
  let secondsTag = document.getElementById("seconds");
  let minutesTag = document.getElementById("minutes");

  if(game.segundos < 10) {
    secondsTag.innerText = `:0${game.segundos}`;
  } else {
    secondsTag.innerText = `:${game.segundos}`;
  }

  if(game.minutos < 10) {
    minutesTag.innerText = `0${game.minutos}`
  } else {
    minutesTag.innerText = `${game.minutos}`
  }
  
}

function setTries() {
  let tries = document.getElementById("try");

  if(game.tries < 10) {
    tries.innerHTML = `0${game.tries}`;
  } else {
    tries.innerHTML = `${game.tries}`;
  }
}