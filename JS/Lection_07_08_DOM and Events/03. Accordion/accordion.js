function toggle() {
  const moreBtn = document.getElementsByClassName("button")[0];
  const moreInfoDiv = document.getElementById("extra");
  moreBtn.addEventListener('click', handleClick(moreInfoDiv));

  function handleClick(moreInfoDiv) {
    if (moreBtn.textContent === "Less") {
      moreInfoDiv.style.display = "none";
      moreBtn.textContent = "More";
    } else {
      moreInfoDiv.style.display = "block";
      moreBtn.textContent = "Less";
    }
  }
}
