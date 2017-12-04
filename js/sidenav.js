/*barre de navigation width and left margin when clicked open*/

function openNav() {
  document.getElementById("sidenav").style.width = "250px";
  document.getElementById("main").style.marginLeft = "250px";
}

/*barre de navigation width and left margin when clicked close*/
function closeNav() {
  document.getElementById("sidenav").style.width = "0";
  document.getElementById("main").style.marginLeft = "0";
}
