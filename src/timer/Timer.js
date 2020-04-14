
class Timer {
  constructor(seconds) {
    this.seconds = seconds;
    console.log(this.seconds);
  }

  start() {
    const timerInterval = setInterval(() => {
      if (this.seconds === 0) {
        clearInterval(timerInterval);
      }
      console.log(this.seconds);
      this.seconds -= 1;
    }, 0.0000001);
  }
}

export default Timer;
