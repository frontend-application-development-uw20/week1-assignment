/*
 * Refactor the code to use the ES6 class syntax.
 * Refactor the code to use arrow function(s).
 * Refactor the code to use let/const.
 * Refactor the code to avoid assigning this to a variable.
 */

class Timer {
  constructor(seconds) {
    this.seconds = seconds;
  }

  start() {
    const timerInterval = setInterval(() => {
      if (this.seconds === 0) {
        clearInterval(timerInterval);
      }

      console.log(this.seconds);
      this.seconds -= 1;
    }, 1000);
  }
}

export default Timer;
