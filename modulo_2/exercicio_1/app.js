function criaQuadrado () {
  const container = document.querySelector('#quadrados');

  const quadrado = document.createElement('div');
  quadrado.style.width = '100px';
  quadrado.style.height = '100px';
  quadrado.style.backgroundColor = 'red';

  container.appendChild(quadrado);
}