// Cria função
function greet(endereco) {
  return `O usuário mora em ${endereco.cidade} / ${endereco.uf}. no bairro ${endereco.bairro}, na rua "${endereco.rua}" com nº ${endereco.numero}.`
}

var endereco = {
    rua: "Rua dos pinheiros",
    numero: 1293,
    bairro: "Centro",
    cidade: "São Paulo",
    uf: "SP"
};

var mensagem = greet(endereco);

console.log(mensagem);
