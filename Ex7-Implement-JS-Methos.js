const arr = [1, 2, 3, 4, 5, 6, 7, 8];

// filter

function filterOddNumbers(arr) {
  return arr.filter((item) => item % 2);
}

console.log(filterOddNumbers(arr));

// forEach

function forEachOddNumbers(arr) {
  const oddArr = [];

  arr.forEach((element) => {
    if (element % 2) oddArr.push(element);
  });

  return oddArr;
}

console.log(forEachOddNumbers(arr));

// Map

function mapPower(arr) {
  return arr.map((item) => item * 2);
}

console.log(mapPower(arr));
