const colors = [1,2,3,4,5,6,7,8,9,0,"A","B","C","D","E","F"];

const btn = document.getElementById('btn');
const colorName = document.getElementById("color");


btn.addEventListener("click",()=>{
let hexColor = "#";
for(let i = 0; i<6;i++){
hexColor=hexColor+ colors[randomNumber()]

document.body.style.backgroundColor = hexColor;
colorName.textContent = hexColor;
}
});



function randomNumber(){
return Math.floor(Math.random()*colors.length);
}