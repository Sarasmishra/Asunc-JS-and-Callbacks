console.log("Begin");
 setTimeout(() => { console.log("Timeout Task"); }, 1000);
  Promise.resolve().then(() => { console.log("Promise Task"); });
   console.log("End");