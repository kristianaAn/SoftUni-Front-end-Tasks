function colorize() {
  const btn = document.getElementsByTagName("button")[0];
  const elsToColor = document.querySelectorAll("body > table > tbody > tr:nth-child(even)");
  for (const element of elsToColor) {
    element.addEventListener('click', changeColor(element));
  }

  function changeColor(el) {
    el.style.backgroundColor = 'Teal';
  } 
}
