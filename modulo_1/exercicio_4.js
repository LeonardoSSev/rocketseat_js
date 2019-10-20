function experiencia(anos) {
  if (anos === 0 || anos === 1) {
    return 'Iniciante';
  }
  if (anos > 1 && anos <= 3) {
    return 'Intermediário';
  }
  if (anos > 3 && anos <= 6) {
    return 'Avançado';
  }
  return 'Jedi Master';
}

var anosEstudo = 7;
const nivelDeExperiencia = experiencia(anosEstudo);

console.log(nivelDeExperiencia);

