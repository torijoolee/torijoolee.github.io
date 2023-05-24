(() => {
  const navBtn = document.querySelector(".nav-btn");
  const navContent = document.querySelector(".mo-nav");
  const navBg = document.querySelector(".nav-bg");
  const navTitle = document.querySelectorAll(".nav-list dt");
  // search
  const searchBtn = document.querySelector(".search > button");
  const searchBox = document.querySelector(".search-box");
  const blur = document.querySelector(".all-container");
  let currentTarget;
  let sibling;
  let before;

  function handleNavContent() {
    navContent.classList.add("On");
    navBg.classList.add("On");
    document.body.classList.add("fixed");
  }
  function removeNavContent() {
    navContent.classList.remove("On");
    navBg.classList.remove("On");
    document.body.classList.remove("fixed");
  }

  function inactivate() {
    if (currentTarget) {
      currentTarget.classList.remove("On");
      sibling.style.maxHeight = null;
    }
  }

  function setCurrentTitle(e) {
    before = document.querySelector(".nav-list.On");
    console.log(before);
    if (before && before == e.target.parentNode) {
      before.classList.remove("On");
      sibling.style.maxHeight = null;
      return;
    }
    inactivate();
    currentTarget = e.target.parentNode;
    currentTarget.classList.add("On");
    sibling = e.target.nextElementSibling;
    sibling.style.maxHeight = sibling.scrollHeight + "px";
    sibling.style.transition = ".5s";
  }

  function removeSearchBox() {
    searchBox.classList.remove("On");
    blur.classList.remove("On");
    document.body.classList.remove("fixed");
  }
  function handleSearchBox() {
    searchBox.classList.add("On");
    blur.classList.add("On");
    document.body.classList.add("fixed");
  }

  // search
  searchBtn.addEventListener("click", handleSearchBox);

  blur.addEventListener("click", removeSearchBox);
  // naviagtion
  navTitle.forEach((title) => {
    title.addEventListener("click", setCurrentTitle);
  });
  navBg.addEventListener("click", removeNavContent);
  navBtn.addEventListener("click", handleNavContent);
})();
