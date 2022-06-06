function myFunction() {
  var dots = document.getElementById("dots");
  var moreText = document.getElementById("more");
  var aText = document.getElementById("myLink");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    aText.innerHTML = "Read more"; 
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    aText.innerHTML = "Read less"; 
    moreText.style.display = "inline";
  }
}