function adicionar () {
  const nome = document.querySelector('input[name=usuario]').value.trim();
  if (!nome || nome === '') {
    return;
  }

  limpaLista();
  adicionaItem('Carregando...');

  const url = `https://api.github.com/users/${nome}`;

  const xhr = new XMLHttpRequest();
  xhr.open('GET', url, true);
  xhr.send();

  let repositorioURL = '';
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
      const response = JSON.parse(xhr.response);
      
      repositorioURL = response.repos_url
      buscaRepositorios(repositorioURL);
    }
    if (xhr.status === 404) {
      mostraNaoEncontrado()
    }
  }
}

function adicionaItem(nome) {
  const lista = document.querySelector('#lista');

  const linha = document.createElement('li');
  const conteudoDaLinha = document.createTextNode(nome);

  linha.appendChild(conteudoDaLinha);
  lista.appendChild(linha);
}

function buscaRepositorios(url) {
  const xhr = new XMLHttpRequest();
  xhr.open('GET', url);
  xhr.send();

  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
      const repositorios = JSON.parse(xhr.response);
    
      limpaLista()
      repositorios.forEach(repositorio => {
        adicionaItem(repositorio.name);
      })
    }
  }
}

function limpaLista () {
    const lista = document.querySelector('#lista');
    lista.innerHTML = '';
}

function mostraNaoEncontrado () {
  limpaLista();
  const lista = document.querySelector('#lista');
  lista.innerHTML = 'Usuário não encontrado.';
}