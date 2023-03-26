function create(words) {
   const divToFill = document.getElementById('content');

   for (const word of words) {
      const newDiv = document.createElement('div');
      const newP = document.createElement('p');
      newP.textContent = word;
      newP.style.display = 'none';
      newDiv.addEventListener('click', clickHandler);
      newDiv.appendChild(newP);
      divToFill.appendChild(newDiv);

   }

   

   function clickHandler(event) {
      const currTarget = event.target;
      currTarget.childNodes[0].style.display = 'block';
   }
}