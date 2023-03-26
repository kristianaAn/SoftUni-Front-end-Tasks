function lockedProfile() {
  const showMoreBtns = Array.from(document.getElementsByTagName("button"));

  for (const btn of showMoreBtns) {
    btn.addEventListener("click", toggleInformation);
  }

  function toggleInformation(event) {
    const currTarget = event.target;
    const parent = currTarget.parentElement;
    const isLocked = parent.children[2];
    const childToToggle = parent.children[9];
    if(isLocked.checked) {
       return;
    } else {
        if (currTarget.textContent === "Show more") {
            childToToggle.style.display = "block";
            currTarget.textContent = "Hide it";
          } else {
            childToToggle.style.display = "none";
            currTarget.textContent = "Show more";
          }
    }
    
  }
}
