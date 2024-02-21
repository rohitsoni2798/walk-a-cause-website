 const progressBar = document.getElementById('myProgressBar');
    const daysNumber = document.getElementById('days');
    const hoursNumber = document.getElementById('hours');
    const minutesNumber = document.getElementById('minutes');
    const secondsNumber = document.getElementById('seconds');
    let remainingTime = (30 * 24 * 60 * 60) + (20 * 60 * 60) + (30 * 60) + 30; // 30 days, 20 hours, 30 minutes, and 30 seconds

    function updateProgressBar() {
      if (remainingTime >= 0) {
        const progressPercentage = ((30 * 24 * 60 * 60) - remainingTime) / (30 * 24 * 60 * 60) * 100;
        progressBar.style.width = `${progressPercentage}%`;

        daysNumber.textContent = Math.floor(remainingTime / (24 * 60 * 60));
        hoursNumber.textContent = Math.floor((remainingTime % (24 * 60 * 60)) / (60 * 60));
        minutesNumber.textContent = Math.floor((remainingTime % (60 * 60)) / 60);
        secondsNumber.textContent = remainingTime % 60;

        remainingTime -= 1;
      } else {
        clearInterval(timerInterval); // Stop the timer
      }
    }

    const timerInterval = setInterval(updateProgressBar, 1000); // Update every 1000 milliseconds (1 second)