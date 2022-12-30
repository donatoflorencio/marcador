let menu = document.getElementById("icon-menu");
let nav = document.getElementById("nav")
let menuClose = document.getElementById("menu-close")
let iconsNone = document.querySelectorAll("icons-none")
let showSidebar = false;

function toggleSidebar() {
  showSidebar = !showSidebar;


  if(showSidebar) {

    nav.style.display = "block"

    menuClose.style.display = "block"

  } else {

    nav.style.display = "none"

    menuClose.style.display = "none"

  }
}

function closeSidebar() {

if(showSidebar) {

  toggleSidebar();
  
}

}


/* if (nav.style.display = "none") {
    menu.addEventListener("click", function() {
      nav.style.display = "block"
      menuClose.style.display = "block"
      iconsNone.style.display = "none"
    }
  )
  menuClose.addEventListener("click", function(){
    nav.style.display = "none"
    
  })
}*/


