const clock = document.querySelector("h2#clock");

function getClock() {
  const date = new Date();
  const hour = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");

  clock.innerText = `${hour}:${minutes}:${seconds}`;
}

getClock();
setInterval(getClock, 1000);

//padStart(2,"0");
//padStart(maxlength,"앞쪽에 채울것")
//maxlength가 되지 않으면 앞쪽에 추가.
//string일때 작동
//원하는 만큼 string을 길게 만들어야 할 때 사용