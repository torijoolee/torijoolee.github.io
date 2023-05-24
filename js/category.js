(() => {
  const cateButtons = document.querySelectorAll(".cate-tab button");
  const cateItems = document.querySelectorAll(".cate-items");
  const cateContent = document.querySelector(".cate-content");
  let current;

  function handleTabBtn(e) {
    remove();
    if (e.target == null) return;
    current = e.target.dataset.index;
    cateButtons[current].classList.add("On");
    cateContent.classList.add("ani-out");
    setTimeout(() => {
      cateItems.forEach((item, i) => {
        item.dataset.index = i;
        if (current === item.dataset.index) {
          item.classList.add("On");
        } else {
          item.classList.remove("On");
        }
      });
      cateContent.classList.remove("ani-out");
    }, 350);
  }

  function remove() {
    for (let i = 0; i < cateButtons.length; i++) {
      cateButtons[i].classList.remove("On");
    }
  }

  cateButtons.forEach((btn, i) => {
    btn.dataset.index = i;
    btn.addEventListener("click", handleTabBtn);
  });

  cateItems.forEach((elem) => {});
})();
