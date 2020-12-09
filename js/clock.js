export let showTime = () => {
  let date = new Date();
  let h = date.getHours(); // 0 - 23
  let m = date.getMinutes(); // 0 - 59

  
  h = (h < 10) ? "0" + h : h;
  m = (m < 10) ? "0" + m : m;
  
  let time = h + ":" + m;
  document.getElementById("clock").textContent = time;
  
  setTimeout(showTime,1000);
  
}
