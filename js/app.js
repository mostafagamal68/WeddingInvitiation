//official wedding date and time is fifth of December 2026 and the wedding begins art 10:00 am.

const weddingDate = new Date("December 5, 2026 10:00:00").getTime();


function updateCountdown() {
    const now = new Date().getTime();
    const timeLeft = weddingDate - now;

    const daysElement = document.getElementById("days");
    const hoursElement = document.getElementById("hours");
    const minutesElement = document.getElementById("minutes");
    const secondsElement = document.getElementById("seconds");

    if (timeLeft <= 0) {
        daysElement.textContent = "00";
        hoursElement.textContent = "00";
        minutesElement.textContent = "00";
        secondsElement.textContent = "00";
        return;
    }

    const days = Math.floor(
        timeLeft / (1000 * 60 * 60 * 24)
    );

    const hours = Math.floor(
        (timeLeft % (1000 * 60 * 60 * 24)) /
        (1000 * 60 * 60)
    );

    const minutes = Math.floor(
        (timeLeft % (1000 * 60 * 60)) /
        (1000 * 60)
    );

    const seconds = Math.floor(
        (timeLeft % (1000 * 60)) /
        1000
    );

    daysElement.textContent = String(days).padStart(2, "0");
    hoursElement.textContent = String(hours).padStart(2, "0");
    minutesElement.textContent = String(minutes).padStart(2, "0");
    secondsElement.textContent = String(seconds).padStart(2, "0");
}


//For running the countdown as soon as the page loads
updateCountdown();

// Update every second of the timer
setInterval(updateCountdown, 1000);