// Get and set cookie functions
function getCookie(name) {
  let cookieArray = document.cookie.split('; ');
  let cookie = cookieArray.find((row) => row.startsWith(name + '='));
  return cookie ? cookie.split('=')[1] : null;
}

function setCookie(name, value, daysToExpire) {
  let date = new Date();
  date.setTime(date.getTime() + daysToExpire * 24 * 60 * 60 * 1000);
  document.cookie =
    name + '=' + value + ';expires=' + date.toUTCString() + ';path=/';
}

// Display and update count on page load
document.addEventListener('DOMContentLoaded', function () {
  let count = parseInt(getCookie('count'));
  if (!isNaN(count)) {
    count++;
  } else {
    count = 1;
  }
  setCookie('count', count, 7);

  const counterElement = document.getElementById('counter');
  if (counterElement) {
    counterElement.textContent = count;
  }
});

// 🔁 Function for button click
function incrementCount() {
  let count = parseInt(getCookie('count')) || 0;
  count++;
  setCookie('count', count, 7);
  document.getElementById('counter').textContent = count;
}
