function countChar(string, target) { 
  var targetcount = 0;

  for (var i = 0; i < string.length; i = i + 1) {
    if (string.charAt(i) == target)
      targetcount += 1; 
  };

  return targetcount;
}

console.log(countChar("yolorific", "o"));
