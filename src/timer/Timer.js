//* Examine the code in these two files and determine each script's behavior.
// function Timer(seconds) {
//   this.seconds = seconds;
// }
// Timer.prototype.start = function () {
//   var instance = this;
//   var timerInterval = setInterval(function () {
//     if (instance.seconds === 0) {
//       clearInterval(timerInterval);
//     }
//     console.log(instance.seconds);
//     instance.seconds -= 1;
//   }, 1000);
// };
// --- * Refactor the code to use the ES6 class syntax.
class Timer {
  constructor(seconds) {
    this.seconds = seconds;
  }
  start() {
    //    * Refactor the code to use `let/const`.
    //    * Refactor the code to avoid assigning `this` to a variable.
    let instance = this.seconds;

    //    * Refactor the code to use arrow function(s).
    const timerInterval = setInterval(() => {
      if (instance === 0) {
        clearInterval(timerInterval);
      }
      console.log(instance);
      instance -= 1;
    }, 1000);
  }
}
export default Timer;
