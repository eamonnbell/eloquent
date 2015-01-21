function range(start, end, step) {
  var outArray = [];

  if ( !(step in arguments) )
    step = 1;

  if ((start < end) && (step < 0))
    return null;

  if ((start > end) && (step > 0))
    return null;

  for (i = start; i < end + 1; i = i + step)
    outArray.push(i);

  return outArray;
}

function sum(inArray) {
  var total = 0;

  for (i = 0; i < inArray.length; i = i + 1)
    total += inArray[i];

  return total;
}

console.log(sum(range(1,10)));

