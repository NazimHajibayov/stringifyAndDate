const formatDate = time => String(time).padStart(2, "0");

const getCurrentDate = () => {
  const today = new Date();
  const year = today.getFullYear();
  const month = formatDate(today.getMonth());
  const day = formatDate(today.getDate());
  const hours = formatDate(today.getHours());
  const minutes = formatDate(today.getMinutes());
  const seconds = formatDate(today.getSeconds());

  return {
    date: month + "/" + day + "/" + year,
    time: hours + ":" + minutes + ":" + seconds
  };
};

const getMilliseconds = () => {
  const { date, time } = getCurrentDate();
  return new Date(date + " " + time).getTime();
};

const setTimeInterval = (seconds) => {
  const timer = Math.floor(Math.abs(seconds));

  if (typeof seconds === "number") {
    let timerCounter = timer;
    let startTime = getMilliseconds();
    const endTime = startTime + timer * 1000;

    while (startTime < endTime) {
      startTime = getMilliseconds();

      if ((endTime - startTime) / timerCounter == 1000) {
        const { time } = getCurrentDate();
        timerCounter--;

        console.log('Time:', time);
      };
    };

    return `Time stopped after ${timer} seconds.`;
  };

  return 'Please send a number as an argument.';
};

const timer = setTimeInterval(-4.3);

console.log(timer);