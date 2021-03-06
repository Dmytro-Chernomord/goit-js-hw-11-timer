class CountdownTimer {
  constructor({ selector, targetDate }) {
    this.selector = document.querySelector(selector);
    this.targetDate = targetDate;
    refs = {
      days: document.querySelector(`${selector} [data-value="days"]`),
      hours: document.querySelector(`${selector} [data-value="hours"]`),
      mins: document.querySelector(`${selector} [data-value="mins"]`),
      secs: document.querySelector(`${selector} [data-value="secs"]`),
    };
    this.startTimer();
  }

  startTimer() {
    refs.days.textContent = 0;
    refs.hours.textContent = 0;
    refs.mins.textContent = 0;
    refs.secs.textContent = 0;

    this.interval();
  }
  interval() {
    setInterval(() => {
      const currenData = this.targetDate - new Date();

      if (currenData >= 0) {
        refs.days.textContent = this.days(currenData);
        refs.hours.textContent = this.hours(currenData);
        (refs.mins.textContent = this.min(currenData)),
          (refs.secs.textContent = this.secs(currenData));
      }
    }, 1000);
  }

  days(time) {
    return Math.floor(time / (1000 * 60 * 60 * 24));
  }

  hours(time) {
    return Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  }
  min(time) {
    return Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
  }

  secs(time) {
    return Math.floor((time % (1000 * 60)) / 1000);
  }
  //? выдает ошибку из-за этого метода
  // pad(value) {
  //   return String(value).padStart(2, '0');
  // }
}

const newTimer = new CountdownTimer({
  selector: '#timer-1',
  targetDate: new Date('August 30, 2020'),
});
