const formatDate = time => String(time).padStart(2, "0");

const a = (date = new Date()) => {
  return {

    year(yearDate = date.getFullYear()) {
      const year = formatDate(date.setFullYear(yearDate))

      return {

        month(monthDate = date.getMonth()) {
          const month = formatDate(date.setMonth(monthDate -1));

          return {

            day(dayDate = date.getDay()) {
              const day = formatDate(date.setDate(dayDate));

              return {

                hours(hoursDate = date.getHours()){
                  const hours = formatDate(date.setHours(hoursDate));

                  return{

                    minutes(minutesDate = date.getMinutes()){
                      const minutes = formatDate(date.setMinutes(minutesDate));

                      return{

                        seconds(secondsDate = date.getSeconds()){
                          const seconds = formatDate(date.setSeconds(secondsDate));

                          return year, month, day, hours, minutes, seconds;
                        },
                      };
                    },
                  };
                },
              };
            },
          };
        },
      };
    },
  };
};

const date = new Date();

a(date).year(2030).month(-3).day(12).hours(-14).minutes(undefined).seconds(80);

console.log(date);