
//PEGANDO HTMLS
let imgScreen = document.getElementsByClassName('imagens');
let img = document.getElementsByTagName('img');

//DEFININDO VARIAVEIS
let urlImg = ["assets/imagem1.jpg", "assets/imagem2.jpg", "assets/imagem3.jpg", "assets/imagem4.jpg"]
let images = [];

urlImg.forEach((element, item) => {
  images[item] = new Image();
  images[item].src = element;
});

imgScreen[0].innerHTML = images[1].outerHTML;

