function digitalClock(){
  let date = new Date();
  let todayDate = date.getDate();
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();
  let timeFormat = 'AM';
  const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
  const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];


  if (hours === 0){
    hours = 12;
  }
  if(hours > 12){
    hours = hours - 12;
    timeFormat = 'PM';
  }
  if (todayDate < 10){
    todayDate = '0'+ todayDate ;
  }


  // Conditional (ternary) operator
  // condition ? exprIfTrue : exprIfFalse
  // var age = 26;
  // var beverage = (age >= 21) ? "Beer" : "Juice";
  // console.log(beverage); // "Beer"


  hours = hours < 10 ? '0'+hours : hours;
  minutes = minutes < 10 ? '0'+minutes : minutes;
  seconds = seconds < 10 ? '0'+seconds : seconds;


  let finalTime = `${hours}:${minutes}:${seconds}`;
  let finalDate = days[date.getDay()]+ ', '+ todayDate +' - '+ months[(date.getMonth())] +' - '+ date.getFullYear();

  document.getElementById('time').innerText = finalTime;
  document.querySelector('small').innerText = timeFormat;
  document.getElementById('today-date').innerText = finalDate;

  setInterval(digitalClock, 1000);
}

digitalClock();

