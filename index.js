// Your code here

let dodger = document.getElementById("dodger");

dodger.style.backgroundColor = "#FF69B4";

function moveDodgerLeft(){

    let leftNumbers = dodger.style.left.replace("px", "");
    let left = parseInt(leftNumbers, 10);

    if (left > 10){
        dodger.style.left = `${left-10}px`;
    }
}

//does same thing as left but opposite direction
function moveDodgerRight(){

    let leftNumbers = dodger.style.left.replace("px", "");
    let left = parseInt(leftNumbers, 10);

    if (left < 360){
        dodger.style.left = `${left+10}px`;
    }
}

document.addEventListener("keydown", function(e){

    console.log(e.key);

    if (e.key ==="ArrowLeft"){
        moveDodgerLeft();
    }
    if (e.key ==="ArrowRight"){
        moveDodgerRight();
    }

});