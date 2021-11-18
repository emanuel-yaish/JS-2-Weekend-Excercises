function countingDuplicates(str) {
  const occurrence = {};
  let res = 0;
  const chars = str.toLowerCase().split("");

  chars.forEach((char) => {
    occurrence[char] = occurrence[char] + 1 || 1;
    if (occurrence[char] === 2) res++;
  });

  return res;
}

console.log(countingDuplicates("abcde"));
console.log(countingDuplicates("aabbcde"));
console.log(countingDuplicates("aabBcde"));
console.log(countingDuplicates("indivisibility"));
console.log(countingDuplicates("Indivisibilities"));
console.log(countingDuplicates("aA11"));
console.log(countingDuplicates("ABBA"));
