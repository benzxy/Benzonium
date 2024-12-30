document.addEventListener("DOMContentLoaded", () => {
  // Function to randomly adjust user counts
  const adjustUserCounts = () => {
    const servers = document.querySelectorAll(".server");

    servers.forEach((server) => {
      // Get the current user count
      const userCountElement = server.querySelector(".users");
      let currentUsers = parseInt(userCountElement.textContent, 10);

      // Adjust the user count randomly (+/- 10)
      const adjustment = Math.floor(Math.random() * 21) - 10; // Random number between -10 and +10
      const newUsers = Math.max(0, currentUsers + adjustment); // Ensure no negative user count

      // Update the user count in the DOM
      userCountElement.textContent = newUsers;
    });
  };

  // Initial setup of servers with random user counts
  const servers = document.querySelectorAll(".server");
  servers.forEach((server, index) => {
    const randomUsers = Math.floor(Math.random() * 500); // Random initial users (0-500)
    const locations = [
      "New York, USA",
      "London, UK",
      "Sydney, Australia",
      "Tokyo, Japan",
    ];
    const randomLocation = locations[index % locations.length];

    // Assign values to the DOM elements
    server.querySelector(".ping").textContent = `${
      Math.floor(Math.random() * 100) + 10
    }ms`; // 10ms to 110ms
    server.querySelector(".users").textContent = randomUsers;
    server.querySelector(".location").textContent = randomLocation;
  });

  // Set an interval to adjust user counts every minute (60,000ms)
  setInterval(adjustUserCounts, 60000);
});
