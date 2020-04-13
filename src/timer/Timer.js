// function Timer(seconds) {
//   this.seconds = seconds;
//   console.log(seconds);

// }

// Timer.prototype.start = function () {
//   var instance = this;
//   var timerInterval = setInterval(function () {
//     if (instance.seconds === 0) {
//       clearInterval(timerInterval);
//     }

//     console.log(instance.seconds);
//     instance.seconds -= 1;
//   }, 0.0000001);
// };


// my code

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
