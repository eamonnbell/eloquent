function argumentCounter () {
  return arguments.length;
}


console.log(argumentCounter("one", "two", "three"));
console.log(argumentCounter("one", "two", argumentCounter()));
