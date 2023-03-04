function solve(orderType, qty) {
  console.log(calculatePrice(orderType, qty));

  function calculatePrice(product, n) {
    let price;
    switch (product) {
      case "coffee":
        price = 1.5 * n;
        break;
      case "water":
        price = 1 * n;
        break;
      case "coke":
        price = 1.4 * n;
        break;
      case "snacks":
        price = 2 * n;
        break;
    }
    return price.toFixed(2);
  }
}

solve("water", 5);
solve("coffee", 2);
