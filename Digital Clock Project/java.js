const startBtn = document.getElementById("startBtn");

startBtn.addEventListener("click", () => {

    function updateClock() {

        let d = new Date();

        // time
        let h = d.getHours();
        let m = d.getMinutes();
        let s = d.getSeconds();

        // date
        let day = d.getDate();
        let month = d.getMonth() + 1;
        let year = d.getFullYear();

        // leading zeros
        h = h < 10 ? "0" + h : h;
        m = m < 10 ? "0" + m : m;
        s = s < 10 ? "0" + s : s;

        day = day < 10 ? "0" + day : day;
        month = month < 10 ? "0" + month : month;

        // update clock
        document.getElementById("hours").innerText = h;
        document.getElementById("minutes").innerText = m;
        document.getElementById("seconds").innerText = s;

        // update date
        document.getElementById("date").innerText =
            `${day} / ${month} / ${year}`;

        // tick sound
        let tick = document.getElementById("tick");

        tick.currentTime = 0;
        tick.play();
    }

    updateClock();

    setInterval(updateClock, 1000);

    startBtn.style.display = "none";
});

   