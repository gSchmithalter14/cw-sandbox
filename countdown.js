const countDownDate = new Date("Dec 18, 2020 15:00:00").getTime();

// Update the count down every 1 second
const countdown = setInterval(function() {

  const now = new Date().getTime();

  const distance = countDownDate - now;

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("countdown").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";

  // If countdown is finished
  if (distance < 0) {
    clearInterval(countdown);
    document.getElementById("countdown").innerHTML = "🙌🎉🍾🥂😎";
  }
}, 1000);