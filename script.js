let toggled = true; // keeps track of state
document.getElementById("btn").addEventListener("click", function () {
  const rating = document.getElementById("rating");
  if (toggled) {
    // First click → transform
    rating.style.backgroundColor = "#FF8938";
    rating.style.transform = "scale(1.6) rotate(360deg)";
    rating.style.transformOrigin = "top left";
    rating.style.transition = "all 1s";
    toggled = false;
  } else {
    // Second click → back to original
    rating.style.backgroundColor = ""; // reset to original
    rating.style.transform = "scale(1) rotate(0deg)";
    rating.style.transition = "all 1s";
    toggled = true;
  }
});
