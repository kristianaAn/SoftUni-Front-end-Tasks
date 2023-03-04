function solve(number, ...operations) {
  let num = Number(number);
  let currentOperation;

  for (let i = 0; i < operations.length; i++) {
    currentOperation = operations[i];
    switch (currentOperation) {
      case "chop":
        num = num / 2;
        break;
      case "dice":
        num = Math.sqrt(num);
        break;
      case "spice":
        num = num + 1;
        break;
      case "bake":
        num = num * 3;
        break;
      case "fillet":
        num = (num * 0.8).toFixed(1);
        break;
    }
    console.log(num);
  }
}

solve('32', 'chop', 'chop', 'chop', 'chop', 'chop');
solve("9", "dice", "spice", "chop", "bake", "fillet");
