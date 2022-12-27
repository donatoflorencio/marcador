let menu = document.getElementById('icon-menu')
let nav = document.getElementById('nav')


function toggleMenu() {
  nav.classList.toggle('active')
}

menu.addEventListener('click', toggleMenu)

// 

let menuClose =document.getElementById('menu-close')


function toggleMenu() {
  nav.classList.toggle('active')
}

menuClose.addEventListener('click', toggleMenu)
