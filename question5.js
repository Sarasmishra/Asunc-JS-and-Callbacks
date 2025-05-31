let seconds = 10; // Set countdown time here

const intervalId = setInterval(() => {
  console.log(`Time left: ${seconds} seconds`);
  seconds--;

  if (seconds < 0) {
    clearInterval(intervalId);
    console.log("Countdown Complete!");
  }
}, 1000);

// After 3 seconds, checking for the stop signal 
setTimeout(() => {
  console.log('Simulated stop check after 3 seconds. (actual key check not defined)');
  // To stop the counter we can unmount this:
  // clearInterval(intervalId);
  // console.log("Countdown Stopped Early.");
}, 3000);
