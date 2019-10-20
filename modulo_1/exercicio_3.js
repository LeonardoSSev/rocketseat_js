function temHabilidade(skills) {
  const temJavascript = skills.find(skill => skill === 'Javascript');

  if (temJavascript) {
    return true;
  }

  return false;
}

var skills = ["Javascript", "ReactJS", "React Native"];

const temJavascript = temHabilidade(skills); // true ou false

console.log(temJavascript)
