let menu = document.getElementById('icon-menu')
let nav = document.getElementById('nav')


function toggleMenu() {
  nav.classList.toggle('active')
}

menu.addEventListener('click', toggleMenu)