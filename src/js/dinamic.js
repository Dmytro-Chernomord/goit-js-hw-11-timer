class CountdownTimer {
  constructor({ selector, targetDate }) {
    this.selector = selector;
    this.targetDate = targetDate;
    this.startTimer();
  }

  startTimer() {
    let days = 0;
    let hours = 0;
    let mins = 0;
    let sec = 0;
    console.log(this.selector);
    setInterval(() => {
      console.log(this.selector);

      const currenData = this.targetDate - new Date();
      if (currenData >= 0) {
        days = Math.floor(currenData / (1000 * 60 * 60 * 24));
        hours = Math.floor(
          (currenData % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
        );
        (mins = this.min(currenData)), (sec = this.secs(currenData));
      }
      inserMarkup(this.selector);
    }, 1000);
    function inserMarkup(selector) {
      console.log(selector);

      const markUp = `<p>создается динамически из конструктора</p> <div class="timer" id="timer-1">
            <div class="field">
              <span class="value" data-value="days">${days}</span>
              <span class="label">Days</span>
            </div>

            <div class="field">
              <span class="value" data-value="hours">${hours}</span>
              <span class="label">Hours</span>
            </div>

            <div class="field">
              <span class="value" data-value="mins">${mins}</span>
              <span class="label">Minutes</span>
            </div>

            <div class="field">
              <span class="value" data-value="secs">${sec}</span>
              <span class="label">Second</span>
            </div>
          </div>`;
      //   console.log(this);
      document.querySelector('body').innerHTML = markUp;
    }
  }

  days(time) {
    Math.floor(time / (1000 * 60 * 60 * 24));
  }
  hours(time) {
    Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  }
  min(time) {
    return Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
  }
  secs(time) {
    return Math.floor((time % (1000 * 60)) / 1000);
  }
}

const test = new CountdownTimer({
  selector: '#dinamic',
  targetDate: new Date('August 30, 2020'),
});

// test.insertMarkup();
// const test2 = new CountdownTimer({
//   selector: '#dinamic2',
//   targetDate: new Date('August 30, 2020'),
// });
