const front = "card_front";
const back = "card_back";
const card = "card";
const icon = "icon";

let nations = ['ale',
  'arg',
  'bra',
  'chi',
  'esp',
  'fra',
  'ing',
  'jap',
  'sui',
  'usa'];

let cards = null;

startGame();

function startGame() {
  cards = createCardsFromNations(nations);
  shuffleCards(cards);

  initializeCards(cards);

}

function initializeCards(cards) {
  let gameBoard = document.getElementById("gameBoard");
  
  cards.forEach(card => {
    
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
    cardElementFace.innerHTML = "&lt/&gt";
  } 

  element.appendChild(cardElementFace);

}


function shuffleCards(cards) {
  let currentIndex = cards.length;
  let randomIndex = 0;

  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [cards[randomIndex], cards[currentIndex]] = [cards[currentIndex], cards[randomIndex]];
  }

  [cards[randomIndex], cards[currentIndex]] = [cards[currentIndex], cards[randomIndex]];
  

}

createCardsFromNations(nations)
function createCardsFromNations (nations) {

  let cards = [];

  nations.forEach((nation) =>  {
    cards.push(createPairFromNations(nation));
  })

  return cards.flatMap(pair => pair);

}

function createPairFromNations(nation) {

  return [{
    id: createIdWithNation(nation),
    icon: nation,
    flipped: false,
  }, {
    id: createIdWithNation(nation),
    icon: nation,
    flipped: false,
  }]

}

function createIdWithNation(nation) {
  return nation + parseInt(Math.random() * 1000)
}

function flipCard() {

  this.classList.add("flip");

}