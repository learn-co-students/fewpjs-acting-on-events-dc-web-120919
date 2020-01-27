// Your code here

let dodger = document.getElementById("dodger");

dodger.style.backgroundColor = "#FF69B4";

dodger.style.bottom = "0px";

function moveDodgerLeft() {
    document.addEventListener("keydown", function(e) {
    if (e.key === "ArrowLeft") {
        let leftNumbers = dodger.style.left.replace("px", "");
        let left = parseInt(leftNumbers, 10);
        if (left < 0) {
        dodger.style.left = `${left - 1}px`;
        }
    }

  });
}

 function moveDodgerRight() {

  document.addEventListener("keydown", function(f) {
    if (f.key === "ArrowRight") {
        let leftNumbers = dodger.style.left.replace("px", "");
        let left = parseInt(leftNumbers, 10);
        if (left < 0) {
        dodger.style.left = `${left + 1}px`;
        }
    }

  });
}



moveDodgerLeft();
moveDodgerRight();




