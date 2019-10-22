function checaIdade (idade) {
  return new Promise(function (resolve, reject) {
    setTimeout(function() {
      if (idade > 18) {
        resolve();
      return;
      }
      reject()
    }, 2000)
  })
}

checaIdade(20)
.then(function () {
  console.log("Maior que 18");
})
.catch(function (error) {
  console.log("Menor que 18");
});