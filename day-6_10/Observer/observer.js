// Subject class
class Subject {
  constructor() {
    this.observers = [];
  }

  // Method to add observers
  addObserver(observer) {
    this.observers.push(observer);
  }

  // Method to remove observers
  removeObserver(observer) {
    this.observers = this.observers.filter((obs) => obs !== observer);
  }

  // Method to notify all observers
  notify(data) {
    this.observers.forEach((observer) => observer.update(data));
  }
}
// Observer class
class Observer {
  // Method called when notified by subject
  update(data) {
    const outputDiv = document.getElementById("output");
    outputDiv.innerHTML = `<p>Received update: ${data}</p>`;
  }
}

// Example usage
const subject = new Subject();

const observer1 = new Observer();
const observer2 = new Observer();

// Adding observers to subject
subject.addObserver(observer1);
subject.addObserver(observer2);

// Function to handle trigger 1
document.getElementById("trigger1").addEventListener("click", () => {
  subject.notify("Trigger 1 clicked!");
});

// Function to handle trigger 2
document.getElementById("trigger2").addEventListener("click", () => {
  subject.notify("Trigger 2 clicked!");
});
