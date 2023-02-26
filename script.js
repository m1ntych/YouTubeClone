const toggleBurgerMenu = document.querySelector('.hamburger-menu');

const searchBar = document.querySelector('.sidebar');

toggleBurgerMenu.addEventListener('click', () => {
  searchBar.classList.toggle('sidebar-active');
});
