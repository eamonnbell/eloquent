var testArray = [1, 3, 5, 7, 9];

function remove(array, index) { 
  return array.slice(0, index)
    .concat(array.slice(index+1));
}

console.log(remove(testArray, 4));
