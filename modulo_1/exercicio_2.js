function pares(x, y) {
  for (var count = x; count < y; count++) {
    if (count % 2 === 0) {
      console.log(count);
    }
  }
} 

pares(32, 321);
