
//PEGANDO HTMLS
let imgScreen = document.getElementsByClassName('imagens');
let img = document.getElementsByTagName('img');
let avancar = document.getElementById('avancar');
let voltar = document.getElementById('voltar');
let imgAtual = document.getElementById('imgAtual');
let circle = document.getElementsByClassName('circle')



console.log(imgAtual)

//DEFININDO VARIAVEIS
let urlImg = ["assets/imagem1.jpg", "assets/imagem2.jpg", "assets/imagem3.jpg", "assets/imagem4.jpg"]
let images = [];
let imgNumber = 0;

imgAtual.innerHTML = `${imgNumber+1} / ${urlImg.length}`;
circle[imgNumber].style.backgroundColor = "black";

urlImg.forEach((element, item) => {
  images[item] = new Image();
  images[item].src = element;
});

avancar.addEventListener('click', function () {
  if (imgNumber < urlImg.length-1) {
    imgNumber++;
    imgScreen[0].innerHTML = images[imgNumber].outerHTML;
    imgAtual.innerHTML = `${imgNumber+1} / ${urlImg.length}`;
    circle[imgNumber-1].style.backgroundColor = "grey";
    circle[imgNumber].style.backgroundColor = "black";
  } 
})

voltar.addEventListener('click', function () {
  if (imgNumber > 0) {
    imgNumber--;
    imgScreen[0].innerHTML = images[imgNumber].outerHTML;
    imgAtual.innerHTML = `${imgNumber+1} / ${urlImg.length-1}`;
    circle[imgNumber+1].style.backgroundColor = "grey";
    circle[imgNumber].style.backgroundColor = "black";
  }
})