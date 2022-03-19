const btn = document.getElementsByClassName("btn-color")[0];
const colorText = document.getElementsByClassName("color")[0];
const body = document.body;

const hexValue = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];

btn.addEventListener('click', changeColor);
function changeColor(){
    let color = "#";
    for(let i = 0; i < 6; i++){
        color += hexValue[randomColor()];
    }
    colorText.textContent = color;
    body.style.backgroundColor = color;
}

function randomColor(){
    return Math.floor(Math.random() * hexValue.length);
}