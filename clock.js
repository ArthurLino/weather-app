const clock = document.querySelector("#clock");

function getClockTime() {
  const date = new Date();
  const clockTime = {
    hours: date.getHours(),
    minutes: date.getMinutes(),
    seconds: date.getSeconds(),
  };
  return clockTime;
}

function formatTimeString(hours, minutes, seconds) {
  const formattedHours = hours.toString().padStart(2, "0");
  const formattedMinutes = minutes.toString().padStart(2, "0");
  const formattedSeconds = seconds.toString().padStart(2, "0");
  return `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
}

function startClock() {
  setInterval(() => {
    const time = getClockTime();
    clock.innerText = formatTimeString(time.hours, time.minutes, time.seconds);
  }, 100);
}

startClock();
