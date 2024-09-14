function updateCountdown() {
    const targetDate = new Date('2024-09-26T00:00:00'); // Set your friend's birthday here
    const now = new Date();
    const timeRemaining = targetDate - now;

    if (timeRemaining <= 0) {
        document.getElementById('days').textContent = '00';
        document.getElementById('hours').textContent = '00';
        document.getElementById('minutes').textContent = '00';
        document.getElementById('seconds').textContent = '00';
        return;
    }

    const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

    document.getElementById('days').textContent = String(days).padStart(2, '0');
    document.getElementById('hours').textContent = String(hours).padStart(2, '0');
    document.getElementById('minutes').textContent = String(minutes).padStart(2, '0');
    document.getElementById('seconds').textContent = String(seconds).padStart(2, '0');
}

function typeWriter() {
    if (index < textContent.length) {
        text.innerHTML += textContent.charAt(index);
        index++;
        setTimeout(typeWriter, 100); // Typing speed (in milliseconds)
    } else {
        // Optional: Add a blinking caret effect once typing is done
        text.style.borderRight = 'none'; // Remove caret if desired
    }
}

setTimeout(typeWriter, 1000); // Start typing after 1 second delay (sync with fade-in)

setInterval(updateCountdown, 1000);
updateCountdown(); // Initial call to set the timer immediately


