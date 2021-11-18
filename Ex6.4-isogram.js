function isIsogram(str) {
  const lettersOccurrence = {};
  const letters = str.toLowerCase().split("");

  for (let index = 0; index < letters.length; index++) {
    lettersOccurrence[letters[index]] =
      lettersOccurrence[letters[index]] + 1 || 1;
    if (lettersOccurrence[letters[index]] > 1) return false;
  }

  return true;
}

console.log(isIsogram("Dermatoglyphics"));
console.log(isIsogram("aba"));
console.log(isIsogram("moOse"));
