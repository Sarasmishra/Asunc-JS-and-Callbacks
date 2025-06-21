// Define taskOne
function taskOne() {
  console.log("Task 1 completed");
}

// Define taskTwo that takes a callback
function taskTwo(callback) {
  console.log("Task 2 completed");
  callback(); // execute the callback after taskTwo finishes
}

// Call taskTwo and pass taskOne as callback
taskTwo(taskOne);
