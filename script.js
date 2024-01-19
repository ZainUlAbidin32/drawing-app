const canvas=document.getElementById("canvas");
const ctx=canvas.getContext("2d");
const increase=document.getElementById("increase");
const decrease=document.getElementById("decrease");
const sizeEl=document.getElementById("size");
const colorEl=document.getElementById("color");
const clearEl=document.getElementById("clear");

let size=12;
let color="black";
let x=undefined;
let y=undefined;

let isPressed=false;

canvas.addEventListener("mousedown",(e)=>{
    isPressed=true;
    x=e.offsetX;
    y=e.offsetY;
})
canvas.addEventListener("mouseup",(e)=>{
    isPressed=false;
    x=undefined;
    y=undefined;
})

canvas.addEventListener("mousemove",(e)=>{
    if(isPressed){
        const x2=e.offsetX;
        const y2=e.offsetY;
        draw(x2,y2);
        drawLine(x,y,x2,y2);
        x=x2;
        y=y2;
    }
})

function draw(x,y){
    ctx.beginPath();
    ctx.arc(x,y,size,0,Math.PI*2);
    ctx.fillStyle=color;
    ctx.fill();
}
function drawLine(x1,y1,x2,y2){
    ctx.beginPath();
    ctx.moveTo(x1,y1);
    ctx.lineTo(x2,y2);
    ctx.strokeStyle=color;
    ctx.lineWidth=size*2;
    ctx.stroke();
}
increase.addEventListener("click",()=>{
    size+=1;
    if (size>=25){
        size=25;
    }
    displaySize();
})
decrease.addEventListener("click",()=>{
    size-=1;
    if (size<=2){
        size=2;
    }
    displaySize();
})
colorEl.addEventListener("change",(e)=>{
    color=e.target.value;
})
clearEl.addEventListener("click",()=>{
    ctx.clearRect(0,0,canvas.width,canvas.height);
})

function displaySize(){
    sizeEl.innerText=size;
}
displaySize();