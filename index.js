const colors = ["blue","#F4CE14","black","rgba(133,122,200)","coral","#228B22"];
const btn = document.getElementById("btn");
const text = document.getElementById("color");



btn.addEventListener("click",()=>{
    let randomNumber = randomColor();
    document.body.style.backgroundColor = colors[randomNumber];
    text.textContent = colors[randomNumber];
})

function randomColor(){

        return  Math.floor(Math.random() *colors.length);

}
    



