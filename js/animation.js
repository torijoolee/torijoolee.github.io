(() => {
  let observer = new IntersectionObserver((e) => {
    e.forEach((elem) => {
      if (elem.isIntersecting) {
        elem.target.classList.add("moving");
      } else {
        elem.target.classList.remove("moving");
      }
    });
  });

  let elem = document.querySelectorAll(".ani");
  for (let i = 0; i < elem.length; i++) {
    observer.observe(elem[i]);
  }
})();
