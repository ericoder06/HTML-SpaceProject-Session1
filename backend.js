function openNavigation() {
  if (x.matches) {
    document.getElementById("sidebar-nav").style.width = "50%";
    document.getElementById("navigation-button").style.display = "none";
  } else {
    document.getElementById("sidebar-nav").style.width = "20%";
    document.getElementById("navigation-button").style.display = "none";
  }
}

var x = window.matchMedia("(max-width: 700px)");

function closeNavigation() {
  document.getElementById("sidebar-nav").style.width = "0";
  document.getElementById("navigation-button").style.display = "block";
}
