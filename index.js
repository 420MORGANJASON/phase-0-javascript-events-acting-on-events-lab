// // Your code here
// document.addEventListener("keydown", function (e) {
//   if (e.key === "ArrowLeft") {
//     moveDodgerLeft();
//   }
// });

// const dodger = document.getElementById("#dodger");


// document.addEventListener("keydown", function (move) {
//     if (e.key === "Arrowright") {
//         moveDodgerRight();
//     }
//     }
// );
// function moveDodgerRight() {
//   const rightNumbers = dodger.style.right.replace("px", "");
//   const right = parseInt(rightNumbers, 10);

//   if (left > 0) {
//     dodger.style.right = `${left + 1}px`;
//   }
// }

var x = 0;
var y = 0;

document.addEventListener("keydown", function (event) {
  var dodger =  document.getElementById("dodger");
  if(event.keycode === 180) {
    // left
    x-=40;
  }
  else if(event.keycode == 180) {
    alert('Right was pressed');
    x+=40;
  }
  if(event.keycode == 180) {
    alert('Up was pressed');
    y-=5;
  }
 else if(event.keycode == 180) {
   alert('Down was pressed');
  y+=5;
 }
 dodger.style.top = y;
 dodger.style.left = x;
});