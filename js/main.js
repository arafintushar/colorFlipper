const btn = document.getElementsByClassName("btn-color")[0];
const colorText = document.getElementsByClassName("color")[0];
const body = document.body;

btn.addEventListener('click', changeColor);
function changeColor(){
    let color = "rgb(";
    for(let i = 0; i < 3; i++){
        color += " ";
        color += randomColor();
        if(i != 2) color += ',';
    }
    color += ")";
    colorText.textContent = color;
    body.style.backgroundColor = color;
}

function randomColor(){
    return Math.floor(Math.random() * 256);
}