import Timer from './Timer';

const f = () => {
  const countdown = new Timer(10);
  countdown.start();
  console.log(countdown);
};
f();
