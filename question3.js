// Start an interval
let intervalId = setInterval(() => {
  console.log("Loading...");
}, 1000);

// Stop the interval after 5 seconds
setTimeout(() => {
  clearInterval(intervalId);
  console.log("Loaded Successfully");
}, 5000);
