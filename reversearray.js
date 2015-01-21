function reverseArray(inArray) {
  var outArray = [];

  for (i = inArray.length - 1; i >= 0; i = i - 1)
    outArray.push(inArray[i]);

  return outArray;
}

function reverseArrayInPlace(inArray) {
  var i = 0;
  while ( i < inArray.length) {
    inArray.unshift(inArray.pop());

    i = i + 1;
  }
}

testArray = [1, 2, 3, 4];

console.log(reverseArray(testArray));
console.log(testArray);
reverseArrayInPlace(testArray);
console.log(testArray);
