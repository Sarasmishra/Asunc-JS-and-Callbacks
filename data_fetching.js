// Simulate fetching user data
function fetchUserData(callback) {
  console.log("Fetching user data...");
  setTimeout(() => {
    const userData = "User data received";
    console.log(userData);
    callback(); // call the next step
  }, 1000); // 1 second delay
}

// Simulate fetching user posts
function fetchUserPosts(callback) {
  console.log("Fetching user posts...");
  setTimeout(() => {
    const postsData = "User posts received";
    console.log(postsData);
    callback(); // call the final step
  }, 1500); // 1.5 second delay
}

// Start the process
fetchUserData(() => {
  fetchUserPosts(() => {
    console.log("All data loaded successfully!");
  });
});
