function solve() {
   const searchedInput = document.getElementById('searchField');
   document.querySelector('#searchBtn').addEventListener('click', onClick);
   
   function onClick() {
      const fieldsToBeSearched = Array.from(document.querySelectorAll('tbody > tr'));
      const searchedInputValue = searchedInput.value;
      for (const tr of fieldsToBeSearched) {
         const row = tr.textContent.trim();

         if (tr.classList.contains('select')) {
            tr.classList.remove('select');
         }

         if(row.includes(searchedInputValue)) {
            tr.classList.add('select');
         }
      }
      searchedInput.value = '';
   }
}