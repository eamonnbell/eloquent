function arrayToList(inArray) {
  var outList = {};
  
  if (inArray.length == 1) {
    return { value: inArray[0],
                rest: null };
  } else {
    return { value: inArray.shift(),
                rest: arrayToList(inArray) };
  };
}

