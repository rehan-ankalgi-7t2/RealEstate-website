const hamButton = document.getElementById('hambutton');
const menu = document.getElementById('menupanel');
const closeButton = document.getElementById('closebutton');

const openMenu = () => {
    menu.style.right = `${0}px`;
}

const closeMenu = () => {
    menu.style.right = `${-640}px`;
}

hamButton.addEventListener('click', openMenu);
closeButton.addEventListener('click', closeMenu);