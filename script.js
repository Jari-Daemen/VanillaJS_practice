/// setting up the time

const time = new Date();

setInterval(()=> {
    const time = new Date();
    const hrs = time.getHours(); 
    const mnts = time.getMinutes();
    const scnds = time.getSeconds();
    if (scnds < 10 && mnts < 10) {
        document.getElementById("full").innerText = `${hrs}:0${mnts}:0${scnds}`
    }  
    else if(scnds < 10 ) {
        document.getElementById("full").innerText = `${hrs}:${mnts}:0${scnds}`
    }   
    else if(mnts < 10 ) {
        document.getElementById("full").innerText = `${hrs}:0${mnts}:${scnds}`
    } 
    else {
    document.getElementById("full").innerText = `${hrs}:${mnts}:${scnds}`
}
}, 1000);

// querySelector as alternative, or use classnames
