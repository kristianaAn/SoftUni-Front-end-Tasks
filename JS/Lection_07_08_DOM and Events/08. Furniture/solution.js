function solve() {
  const inputTextArea = document.getElementsByTagName('textarea')[0];
  const generateBtn = document.getElementsByTagName('button')[0];
  const tableBodyToFill = document.getElementsByTagName('tbody')[0];

  generateBtn.addEventListener("click", handleGeneratedFurniture);
  
  const outputTextArea = document.getElementsByTagName('textarea')[1];
  const buyBtn = document.getElementsByTagName('button')[1];
  buyBtn.addEventListener("click", handleCalculation);
  
  function handleGeneratedFurniture() {
    const data = JSON.parse(inputTextArea.value);
    for (const {img, name, price, decFactor} of data) {
      const tableRow = createElement('tr', '', tableBodyToFill);
      const tableDefOne = createElement('td', '', tableRow);
      createElement('img', '', tableDefOne, '', '', {src: img});
      const tableDefTwo = createElement('td', '', tableRow);
      createElement('p', name, tableDefTwo);
      const tableDefThree = createElement('td', '', tableRow);
      createElement('p', price, tableDefThree);
      const tableDefFour = createElement('td', '', tableRow);
      createElement('p', decFactor, tableDefFour);
      const tableDefFive = createElement('td', '', tableRow);
      createElement('input', '', tableDefFive, '', '', {type: 'checkbox'});
    }
  }

  function handleCalculation() {
    let productNamesArr = [];
    let productsPrice = 0;
    let decFactorArr = 0;
    const checkedProducts = Array.from(document.querySelectorAll('input[type=checkbox]:checked'));
    for (const product of checkedProducts) {
      let currTableRow = product.parentElement.parentElement;
      let tableChildren = Array.from(currTableRow.children);
      productNamesArr.push(tableChildren[1].textContent);
      productsPrice += Number(tableChildren[2].textContent);
      decFactorArr += Number(tableChildren[3].textContent);
    }

    outputTextArea.value = `Bought furniture: ${productNamesArr.join(', ')}` + '\n' 
    + `Total price: ${productsPrice.toFixed(2)}` + '\n'
    + `Average decoration factor: ${(decFactorArr / checkedProducts.length)}`
  }

  function createElement(type, content, parentNode, id, classes, attributes) {
    const htmlElement = document.createElement(type);
  
    if (content && type !== 'input' && type !== 'textarea') {
      htmlElement.textContent = content;
    }
  
    if (content && (type === "input" || type === 'textarea')) {
      htmlElement.value = content;
    }
  
    if (parentNode) {
      parentNode.appendChild(htmlElement);
    }
  
    if (id) {
      htmlElement.id = id;
    }
  
    if (classes) {
      htmlElement.classList.add(...classes);
    }
  
    if (attributes) {
      for (const key in attributes) {
        htmlElement.setAttribute(key, attributes[key]);
      }
    }
  
    return htmlElement;
  }
}


