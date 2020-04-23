let nseconds;
function Timer(seconds) {
  nseconds = seconds;
}
Timer.prototype.start = (() => {
  const timerInterval = setInterval(() => {
    if (nseconds === 0) {
      clearInterval(timerInterval);
    }
    console.log(nseconds);
    nseconds -= 1;
  }, 1000);
});

export default Timer;
