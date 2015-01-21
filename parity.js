// 0 is even
// 1 is odd
// for any other number N

function isEven(number) {
  if (number == 0)
    return true;
  else if (number == 1)
    return false;
  else
    return isEven(number - 2);
}

console.log(isEven(2));
console.log(isEven(75));
console.log(isEven(-1));

