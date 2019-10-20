function carregarLista () {
  let listaNode = document.querySelector('#lista');
  
  listaNode.innerHTML = '';

  nomes.forEach(nome => {
    const linhaNode = document.createElement('li');
    const texto = document.createTextNode(nome);
  
    linhaNode.appendChild(texto);
  
    listaNode.appendChild(linhaNode);
  })
}


function adicionar () {
  const inputElement = document.getElementsByName('nome')[0];

  const nome = inputElement.value;

  if (nome === '') {
    return;
  }
  
  nomes.push(nome);
  carregarLista();

  inputElement.value = '';
}

const nomes = ["Diego", "Gabriel", "Lucas"];

carregarLista()