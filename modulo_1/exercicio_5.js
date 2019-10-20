function resumo (usuarios) {
  usuarios.forEach(usuario => {
    const habilidadesString = usuario.habilidades.join(', ');
    const mensagem = `O ${usuario.nome} possui as habilidades: ${habilidadesString}`;

    console.log(mensagem);
  })
}
  

var usuarios = [
  {
    nome: "Diego",
    habilidades: ["Javascript", "ReactJS", "Redux"]
  },
  {
    nome: "Gabriel",
    habilidades: ["VueJS", "Ruby on Rails", "Elixir"]
  }
];

resumo(usuarios);