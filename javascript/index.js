let menu = document.getElementById("icon-menu")
let nav = document.getElementById("nav")
let showSidebar = false;


function toggleSidebar() {
  showSidebar = !showSidebar;


  if(showSidebar) {

    nav.style.right = '30%'
    nav.style.left = '0%'

    nav.style.animationName = "showSidebar"

  } else {

    nav.style.right = "100%"
    nav.style.left = '-100%'
    nav.style.animationName = ""

  }
}

function closeSidebar() {

if(showSidebar) {

  toggleSidebar();

}

}


/*notão adicionar +3*/


