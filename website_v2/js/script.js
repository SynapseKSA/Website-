const counts = document.querySelectorAll(".count");
const speed = 10;

counts.forEach((counter) => {
  function upDate() {
    const target = Number(counter.getAttribute("data-target"));
    const count = Number(counter.innerText);
    const inc = target / speed;
    if (count < target) {
      counter.innerText = Math.floor(inc + count);
      setTimeout(upDate, 30);
    } else {
      counter.innerText = target;
    }
  }
  upDate();
});