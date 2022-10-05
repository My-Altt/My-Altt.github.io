function toggleEngine() {

  var dSearch = document.getElementById("dSearch");
  var gSearch = document.getElementById("gSearch");
  var logo = document.getElementById("engineLogo").src;
  localStorage.setItem('preferredEngine', logo);

  if (logo.indexOf("google.svg") != -1) {
    document.getElementById("engineLogo").src = "duck.svg";
    gSearch.style.display = "none";
    dSearch.style.display = "block";
  } else {
    document.getElementById("engineLogo").src = "google.svg";
    dSearch.style.display = "none";
    gSearch.style.display = "block";
  }

  document.getElementById("textField").reset();
}
