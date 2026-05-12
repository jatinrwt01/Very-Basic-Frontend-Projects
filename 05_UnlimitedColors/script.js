const startBtn = document.getElementById('start');
const stopBtn = document.getElementById('stop');
let intervalId;

function randomColor(){
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
}

const change = function changeColour(){
    let generatedColor = randomColor();
    document.body.style.backgroundColor = generatedColor;
}

startBtn.addEventListener('click', ()=>{
    if(intervalId) return;
  intervalId =  setInterval(change, 1000);
});

stopBtn.addEventListener('click', () => {
    clearInterval(intervalId);
    intervalId = null;
});