/// setting up the time

const time = new Date();

setInterval(()=> {
    const time = new Date();
    document.getElementById("hrs").innerText = time.getHours(); 
    document.getElementById("mnts").innerText = time.getMinutes();
    document.getElementById("scnds").innerText = time.getSeconds();
}, 1000);

// querySelector as alternative, or use classnames
