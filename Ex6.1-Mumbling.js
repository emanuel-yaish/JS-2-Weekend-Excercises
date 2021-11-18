function accum(str) {
  const letters = str.split("");

  const res = letters.map(
    (letter, index) => letter.toUpperCase() + letter.toLowerCase().repeat(index)
  );
  return res.join("-");
}

console.log(accum("abcd"));
console.log(accum("RqaEzty"));
console.log(accum("cwAt"));
