(() => {
  const visuContent = document.querySelectorAll(".visu-content");
  const prevBtn = document.querySelector(".btn-left");
  const nextBtn = document.querySelector(".btn-right");
  const visuDots = document.querySelectorAll(".visu-dots li");
  let current;
  const total = visuContent.length;

  function remove() {
    visuContent.forEach((elem) => {
      elem.classList.remove("On");
    });
    visuDots.forEach((dot) => {
      dot.classList.remove("On");
    });
  }

  function addOn() {
    visuContent[current].classList.add("On");
    currentPageDot();
  }

  function prevPage() {
    remove();
    if (current > 0) {
      current--;
    } else {
      current = total - 1;
    }
    addOn();
  }
  function nextPage() {
    remove();
    if (current < total - 1) {
      current++;
    } else {
      current = 0;
    }
    addOn();
  }

  function currentPageDot() {
    visuDots[current].classList.add("On");
  }

  let autoPlay = setInterval(nextPage, 4000);

  function moveTargetPage(e) {
    current = e.target.dataset.index;
    if (current) {
      clearInterval(autoPlay);
      e.target.classList.add("On");
      visuContent.forEach((img, i) => {
        img.dataset.index = i;
        if (current === img.dataset.index) {
          img.classList.add("On");
        } else {
          img.classList.remove("On");
          visuDots[i].classList.remove("On");
        }
      });
    }
  }

  visuDots.forEach((dot, i) => {
    dot.dataset.index = i;
    dot.addEventListener("click", moveTargetPage);
  });
  prevBtn.addEventListener("click", prevPage);
  nextBtn;
  nextBtn.addEventListener("click", nextPage);
})();
