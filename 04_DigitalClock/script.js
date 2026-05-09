const clock = document.getElementById('clock');

setInterval(() => {
    const date = new Date();

   clock.innerHTML = `<p id="time">${date.toLocaleTimeString()}</p>` 
}, 1000);