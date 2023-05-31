const buttonNavToggle = document.getElementById('nav-toggle');

buttonNavToggle.addEventListener('click', () => {
    const ulNavMenuContainer = document.getElementById('nav-menu-container');
    ulNavMenuContainer.style.display = (ulNavMenuContainer.offsetParent === null ? 'block' : 'none');
});