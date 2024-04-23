// Publisher class
class Publisher {
  constructor() {
    this.subscribers = [];
  }

  // Method to add subscribers
  subscribe(subscriber) {
    this.subscribers.push(subscriber);
  }

  // Method to remove subscribers
  unsubscribe(subscriber) {
    this.subscribers = this.subscribers.filter((sub) => sub !== subscriber);
  }

  // Method to notify all subscribers
  notify(data) {
    this.subscribers.forEach((subscriber) => subscriber(data));
  }
}

// Example usage
const publisher = new Publisher();

// Subscriber function
const subscriberFunction = (data) => {
  const outputDiv = document.getElementById("output");
  outputDiv.innerHTML += `<p>Received update: ${data}</p>`;
};

// Subscribe to publisher
publisher.subscribe(subscriberFunction);

// Function to handle trigger 1
document.getElementById("trigger1").addEventListener("click", function () {
  publisher.notify("Trigger 1 clicked!");
});

// Function to handle trigger 2
document.getElementById("trigger2").addEventListener("click", function () {
  publisher.notify("Trigger 2 clicked!");
});
