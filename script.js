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

// let flag = true;
// document.getElementById("demo").addEventListener("click", function (event) {
//   if (
//     event.target.parentNode.id === "demo" ||
//     event.target.id === "demo" ||
//     event.target.id === "image"
//   ) {
//     if (flag) {
//       this.style.background = "linear-gradient(to bottom, #68f7f7, #defafa)";
//       flag = false;
//     } else {
//       this.style.background = "linear-gradient(to bottom, #F4F4F4, #FFFFFF)";
//       flag = true;
//     }
//   }
// });

const demo = document.getElementById("demo");
let flag = true;
document.addEventListener("click", function (event) {
  if (demo.contains(event.target)) {
    // Clicked inside #demo
    if (flag) {
      demo.style.background = "linear-gradient(to bottom, #68f7f7, #defafa)";
      flag = false;
    } else {
      demo.style.background = "linear-gradient(to bottom, #F4F4F4, #FFFFFF)";
      flag = true;
    }
  } else {
    // Clicked outside #demo
    demo.style.background = "linear-gradient(to bottom, #F4F4F4, #FFFFFF)";
  }
});
