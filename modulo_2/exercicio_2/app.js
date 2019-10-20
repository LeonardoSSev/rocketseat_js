function criaQuadrado () {
  const container = document.querySelector('#quadrados');

  const quadrado = document.createElement('div');
  quadrado.style.width = '100px';
  quadrado.style.height = '100px';
  quadrado.style.backgroundColor = 'red';
  
  quadrado.addEventListener('mouseover', function (event) {
    const cor = getRandomColor();
    event.target.style.backgroundColor = cor;
  }, false);

  container.appendChild(quadrado);
}

function getRandomColor () {
  var letters = "0123456789ABCDEF";
  var color = "#";
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  
  return color; 
}