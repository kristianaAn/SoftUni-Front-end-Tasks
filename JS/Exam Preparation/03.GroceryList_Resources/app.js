function solve() {
  const loadBtn = document.getElementById("load-product");
  const BASE_URL = "http://localhost:3030/jsonstore/grocery/";
  const tableBodyContainer = document.getElementById("tbody");
  const addBtn = document.getElementById("add-product");
  const updateProduct = document.getElementById("update-product");
  const productName = document.getElementById("product");
  const countNum = document.getElementById("count");
  const priceNum = document.getElementById("price");

  loadBtn.addEventListener("click", loadProductsHandler);

  addBtn.addEventListener("click", addProductHandler);

  function loadProductsHandler(e) {
    e?.preventDefault();
    fetch(BASE_URL)
      .then((res) => res.json())
      .then((data) => {
        tableBodyContainer.innerHTML = "";
        for (const key in data) {
          ({ product, count, price, _id } = data[key]);
          let tr = createElement("tr", "", tableBodyContainer);
          let nameTd = createElement("td", product, tr, "", ["name"]);
          let countTd = createElement("td", count, tr, "", ["count-product"]);
          let priceTd = createElement("td", price, tr, "", ["product-price"]);
          let btnsTd = createElement("td", "", tr, "", ["btn"]);
          let updateBtn = createElement("button", "Update", btnsTd, "", [
            "update",
          ]);
          updateBtn.setAttribute("id", _id);
          let deletebtn = createElement("button", "Delete", btnsTd, "", [
            "delete",
          ]);
          deletebtn.setAttribute("id", _id);

          deletebtn.addEventListener("click", deleteProductHandler);
          updateBtn.addEventListener("click", updateProductDataHandler);

          productName.value = "";
          countNum.value = "";
          priceNum.value = "";
        }
      })
      .catch((err) => {
        console.error(err);
      });
  }

  function updateProductDataHandler(e) {
    const targetId = e.currentTarget.id;
    addBtn.disabled = true;
    updateProduct.disabled = false;
    let parentData = e.currentTarget.parentNode.parentNode;
    const children = Array.from(parentData.children);
    [productN, countProduct, productPrice, _btns] = children;
    productName.value = productN.innerHTML;
    countNum.value = countProduct.innerHTML;
    priceNum.value = productPrice.innerHTML;

    updateProduct.addEventListener("click", sendUpdatedDataHandler);

    function sendUpdatedDataHandler() {
      const product = productName.value;
      const count = countNum.value;
      const price = priceNum.value;
      const httpHeaders = {
        method: "PATCH",
        body: JSON.stringify({ product, count, price }),
      };

      fetch(BASE_URL + targetId, httpHeaders)
        .then(() => {
          loadProductsHandler();
          addBtn.disabled = false;
          updateProduct.disabled = true;
        })
        .catch((err) => {
          console.error(err);
        });
    }
  }

  function deleteProductHandler(e) {
    const targetId = e.currentTarget.id;
    const httpHeaders = {
      method: "DELETE",
    };

    fetch(BASE_URL + targetId, httpHeaders)
      .then(() => {
        loadProductsHandler();
      })
      .catch((err) => {
        console.error(err);
      });
  }

  function addProductHandler(e) {
    e.preventDefault();
    let product = productName.value;
    let count = countNum.value;
    let price = priceNum.value;
    const httpHeaders = {
      method: "POST",
      body: JSON.stringify({ product, count, price }),
    };

    fetch(BASE_URL, httpHeaders)
      .then((res) => res.json())
      .then(() => {
        loadProductsHandler();
        
      })
      .catch((err) => {
        console.error(err);
      });
  }

  function createElement(type, content, parentNode, id, classes, attributes) {
    const htmlElement = document.createElement(type);

    if (content && type !== "input" && type !== "textarea") {
      htmlElement.textContent = content;
    }

    if (content && (type === "input" || type === "textarea")) {
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

solve();
