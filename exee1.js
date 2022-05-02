const getTime = function (seconds){
    seconds = Math.floor(Math.abs(seconds));
    let timeObj = {
      years : undefined,
      months : undefined,
      days : undefined,
      hours : undefined,
      minutes : undefined,
      seconds : seconds
    }
    
    if(typeof(seconds) == 'number'){
    timeObj.minutes = parseInt(timeObj.seconds / 60);
      if(timeObj.minutes > 0){
        timeObj.seconds -= timeObj.minutes * 60;
      }
      timeObj.hours = parseInt(timeObj.minutes / 60);
      if(timeObj.hours > 0 ){
        timeObj.minutes -= timeObj.hours * 60;
      }
      timeObj.days = parseInt(timeObj.hours / 24);
      if(timeObj.days > 0){
        timeObj.hours -= timeObj.days * 24;
      }
      timeObj.months = parseInt(timeObj.days / 30);
      if(timeObj.months > 0){
        timeObj.days -= timeObj.months * 30;
      }
      timeObj.years = parseInt(timeObj.months / 12);
      if(timeObj.years > 0){
        timeObj.months -= timeObj.years * 12;
      }
    return timeObj;
    }else{
      return 'Please send number as an argument.'
    }
  }
  console.log(getTime(-100.50));