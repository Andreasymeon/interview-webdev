/*barre de navigation width and left margin when clicked open*/
function openNav() {
  document.getElementById("sidenav").style.width = "250px";
  document.body.style.marginLeft = "250px";
  document.body.style.paddingLeft = "10";
  document.getElementById("burgermenu").style.visibility = 'hidden';
}

/*barre de navigation width and left margin when clicked close*/
function closeNav() {
  document.getElementById("sidenav").style.width = "0";
  document.body.style.marginLeft = "0";
  document.getElementById("burgermenu").style.visibility = 'block';
}
