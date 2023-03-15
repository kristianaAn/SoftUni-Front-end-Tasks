function calcStoreProvision(currentStockArr, deliveryArr) {
  let allProductsArr = [...currentStockArr, ...deliveryArr];
  let stockObj = {};
  let productName;

  for (let i = 0; i < allProductsArr.length; i++) {
    let input = allProductsArr[i];

    if (i % 2 === 0) {
      productName = input;
      if (!stockObj.hasOwnProperty(productName)) {
        stockObj[productName] = 0;
      }
    } else {
      quantity = Number(input);
      stockObj[productName] += quantity;
    }
  }

  for (const product in stockObj) {
    console.log(product + " -> " + stockObj[product]);
  }
}

calcStoreProvision(
  ["Chips", "5", "CocaCola", "9", "Bananas", "14", "Pasta", "4", "Beer", "2"],
  ["Flour", "44", "Oil", "12", "Pasta", "7", "Tomatoes", "70", "Bananas", "30"]
);

calcStoreProvision(
  ["Salt", "2", "Fanta", "4", "Apple", "14", "Water", "4", "Juice", "5"],
  ["Sugar", "44", "Oil", "12", "Apple", "7", "Tomatoes", "7", "Bananas", "30"]
);
