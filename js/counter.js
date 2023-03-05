const counter = document.getElementsByClassName("counter");

class Counter {
  constructor(element, start, end, duration, delay) {
    this.element = element;
    this.start = start;
    this.end = end;
    this.duration = duration;
    this.delay = delay;

    this.counter();
  }

  counter() {
    setTimeout(() => {
      this.element.innerHTML = this.start;

      const interval = setInterval(() => {
        this.start++;

        if (this.start > this.end) {
          clearInterval(interval);
        }

        this.element.innerHTML = this.start;
      }, this.duration / this.end);
    }, this.delay);
  }
}

for (let i = 0; i < counter.length; i++) {
  const element = counter[i];
  const start = parseInt(element.getAttribute("data-start"));
  const end = parseInt(element.getAttribute("data-end"));
  const duration = parseInt(element.getAttribute("data-duration"));
  const delay = parseInt(element.getAttribute("data-delay"));

  // Create new instance of counter
  new Counter(element, start, end, duration, delay);
}
