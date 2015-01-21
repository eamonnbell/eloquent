function zeroPad(number, width) {
  var string = String(number);
  while (string.length < width) {
    string = "0" + string;
  };
  return string;
}


