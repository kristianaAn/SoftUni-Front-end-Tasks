function deleteByEmail() {
  const emails = Array.from(document.querySelectorAll("td:nth-child(even)"));
  const inputData = document.getElementsByTagName("input")[0];
  let inputDataValue = inputData.value;
  let outputField = document.getElementById("result");
  let isFound = emails.find((e) => e.textContent === inputDataValue);
  console.log(isFound);

  if (isFound) {
    isFound.parentElement.remove();
    outputField.textContent = "Deleted.";
  } else {
    outputField.textContent = "Not found.";
  }

  inputData.value = "";
}
