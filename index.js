// Your code here
function moveDodgerLeft() {
    let dodger = document.getElementById("dodger");
    // this gets only the number takes away px
    let leftNumbers = dodger.style.left.replace("px", "");
    // this applys the changes and gets the number
    let left = parseInt(leftNumbers, 10);

    if (left > 0) {
      dodger.style.left = `${left - 1}px`;
    }
}
    document.addEventListener("keydown", function(e) {
        if (e.key === "ArrowLeft") {
            moveDodgerLeft();
        }
    });

    function moveDodgerRight(){
        let dodger = document.getElementById("dodger");
        // this gets only the number takes away px
        let leftNumbers = dodger.style.left.replace("px", "");
        // this applys the changes and gets the number
        let left = parseInt(leftNumbers, 10);
    
        if (left > 0) {
          dodger.style.left = `${left + 1}px`;
        }
    }

    document.addEventListener("keydown", function(e) {
        if (e.key === "ArrowRight") {
            moveDodgerRight();
        }
    });

    function moveDodgerUp(){
        let dodger = document.getElementById("dodger");
        let bottomNumbers = dodger.style.bottom.replace("px", "");
        let bottom = parseInt(bottomNumbers, 10);

        if (bottom >= 0){
            dodger.style.bottom = `${bottom + 1}px`
        }
    }
    document.addEventListener("keydown", function(e) {
        if (e.key === "ArrowUp"){
            moveDodgerUp();
        }
    });
    
    function moveDodgerDown(){
        let dodger = document.getElementById("dodger");
        let bottomNumbers = dodger.style.bottom.replace("px", "");
        let bottom = parseInt(bottomNumbers, 10);
        if (bottom >= 0){
            dodger.style.bottom = `${bottom - 1}px`
        }

    }
    document.addEventListener("keydown", function(e) {
        if (e.key === "ArrowDown"){
            moveDodgerDown();
        }
    });