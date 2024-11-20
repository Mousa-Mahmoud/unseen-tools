document.addEventListener('DOMContentLoaded', function() {
    // Timer Variables
    let timerInterval;
    let timerSeconds = 0;
    
    const timerDisplay = document.getElementById('timer-display');
    const startTimerButton = document.getElementById('start-timer');
    const stopTimerButton = document.getElementById('stop-timer');
    const resetTimerButton = document.getElementById('reset-timer');
    
    function updateTimerDisplay() {
        const hours = Math.floor(timerSeconds / 3600);
        const minutes = Math.floor((timerSeconds % 3600) / 60);
        const seconds = timerSeconds % 60;
        timerDisplay.textContent = `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
    }
    
    function startTimer() {
        timerInterval = setInterval(function() {
            timerSeconds++;
            updateTimerDisplay();
        }, 1000);
    }
    
    function stopTimer() {
        clearInterval(timerInterval);
    }
    
    function resetTimer() {
        timerSeconds = 0;
        updateTimerDisplay();
        stopTimer();
    }
    
    startTimerButton.addEventListener('click', startTimer);
    stopTimerButton.addEventListener('click', stopTimer);
    resetTimerButton.addEventListener('click', resetTimer);

    // Countdown Variables
    let countdownInterval;
    let countdownSeconds = 0;
    
    const countdownDisplay = document.getElementById('countdown-display');
    const hoursInput = document.getElementById('hours');
    const minutesInput = document.getElementById('minutes');
    const secondsInput = document.getElementById('seconds');
    const setTimeButton = document.getElementById('set-time');
    const startCountdownButton = document.getElementById('start-countdown');
    const stopCountdownButton = document.getElementById('stop-countdown');
    const resetCountdownButton = document.getElementById('reset-countdown');
    
    function updateCountdownDisplay() {
        const hours = Math.floor(countdownSeconds / 3600);
        const minutes = Math.floor((countdownSeconds % 3600) / 60);
        const seconds = countdownSeconds % 60;
        countdownDisplay.textContent = `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
    }
    
    function startCountdown() {
        if (countdownSeconds <= 0) {
            alert('الرجاء تحديد وقت صحيح!');
            return;
        }
        countdownInterval = setInterval(function() {
            if (countdownSeconds > 0) {
                countdownSeconds--;
                updateCountdownDisplay();
            } else {
                clearInterval(countdownInterval);
                alert('الوقت انتهى!');
            }
        }, 1000);
    }
    
    function stopCountdown() {
        clearInterval(countdownInterval);
    }
    
    function resetCountdown() {
        countdownSeconds = 0;
        updateCountdownDisplay();
        stopCountdown();
    }
    
    function setCountdownTime() {
        const hours = parseInt(hoursInput.value, 10) || 0;
        const minutes = parseInt(minutesInput.value, 10) || 0;
        const seconds = parseInt(secondsInput.value, 10) || 0;
        countdownSeconds = (hours * 3600) + (minutes * 60) + seconds;
        if (countdownSeconds <= 0) {
            alert('الرجاء إدخال مدة صالحة.');
            return;
        }
        updateCountdownDisplay();
    }
    
    setTimeButton.addEventListener('click', setCountdownTime);
    startCountdownButton.addEventListener('click', startCountdown);
    stopCountdownButton.addEventListener('click', stopCountdown);
    resetCountdownButton.addEventListener('click', resetCountdown);
});
