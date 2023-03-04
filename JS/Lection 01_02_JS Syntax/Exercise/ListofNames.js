function sort(names) {
  names.sort((aName, bName) => {
    let result = aName.localeCompare(bName);
    return result;
  });

  let counter = 1;

  for (const name of names) {
    console.log(counter + "." + name);
    counter++;
  }
}

sort(["John", "Bob", "Christina", "Ema"]);
