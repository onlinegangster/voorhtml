document.addEventListener('DOMContentLoaded', () => {
  const searchButton = document.querySelector('#search-btn');
  const searchBar = document.querySelector('#search-bar');

    searchButton.addEventListener('click', () => {
      const query = searchBar.value;
      if (query) {
        alert(`Je zoekt naar: ${query}`);
      } else {
        alert('Vul iets in om te zoeken.');
      }
    });
  });
  

