const listaNode = document.querySelector('#lista');

const nomes = ["Diego", "Gabriel", "Lucas"];

nomes.forEach(nome => {
  const linhaNode = document.createElement('li');
  const texto = document.createTextNode(nome);

  linhaNode.appendChild(texto);

  listaNode.appendChild(linhaNode);
})