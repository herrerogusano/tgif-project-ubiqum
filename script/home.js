//read more
/* const ReadMore = () => {
    let space = document.getElementById("space");
    let moreText = document.getElementById("more");
    let btnText = document.getElementById("myBtn");
  
    if (space.style.display === "none") {
      space.style.display = "inline";
      btnText.innerHTML = "Read more";
      moreText.style.display = "none";
    } else {
      space.style.display = "none";
      btnText.innerHTML = "Read less";
      moreText.style.display = "inline";
    }
} */
window.ReadMore_Less=ReadMore_Less;
function ReadMore_Less() {
  let dots = document.getElementById("dots");
  let moreText = document.getElementById("more");
  let btnText = document.getElementById("myBtn");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Read more";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Read less";
    moreText.style.display = "inline";
  }
}