let menu = document.getElementById("icon-menu");
let nav = document.getElementById("nav")
let menuClose = document.getElementById("menu-close")
let iconNone = document.querySelector(".icon-none")


  if (nav.style.display = "none") {
    menu.addEventListener("click", function() {
      nav.style.display = "block"
      iconNone.style.display = "none"



      if (nav.style.display = "block") {
        menuClose.addEventListener("click", function(){
          nav.style.display = "none"
          iconNone.style.display = "block"
        })
      }
    }
  )}
