function distinctLetters(str, lettersObj) {
  const letters = str.split("");

  letters.forEach((letter) => (lettersObj[letter] = 1));
}

function organizeStrings(strA, strB) {
  const letters = {};
  distinctLetters(strA, letters);
  distinctLetters(strB, letters);

  return Object.keys(letters).sort().join("");
}

console.log(organizeStrings("xyaabbbccccdefww", "xxxxxxyyyyabklmopqxx"));
console.log(
  organizeStrings("abcdefghijklmnopqrstuvwxyz", "abcdefghijklmnopqrstuvwxyz")
);
