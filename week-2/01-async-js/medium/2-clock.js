
function displayTime() {
    const time = new Date();
    const hours = time.getHours().toString().padStart(2,'0')
    const minutes = time.getMinutes().toString().padStart(2,'0');
    const seconds = time.getSeconds().toString().padStart(2,'0');
    
    const currentTime = `${hours}:${minutes}:${seconds}`;
    console.clear();
    console.log(currentTime);    
}

setInterval(displayTime, 1000);

displayTime();

