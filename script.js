const body = document.body;

let spentTime = localStorage.getItem("timer");
if(!localStorage.getItem("timer")) {
    localStorage.setItem("timer", 0);
}

body.innerHTML = spentTime;

document.addEventListener('DOMContentLoaded', () => {start()});


function start() {
    setTimeout(function() {
        spentTime ++;
        body.innerHTML = spentTime;
        localStorage.setItem("timer", spentTime);
        start();
    }, 1000);
}
