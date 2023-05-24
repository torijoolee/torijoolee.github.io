(() => {
  const LangBtnElem = document.querySelector(".language button");
  const language = document.querySelector(".language");
  const searchBtn = document.querySelector(".search button");
  const searchForm = document.querySelector(".search-box");
  const closeForm = document.querySelector(".search-close");

  // language
  LangBtnElem.addEventListener("click", function () {
    language.classList.toggle("On");
  });

  // search Form
  function handleSearchForm() {
    searchForm.classList.add("On");
  }
  function closeSearchForm() {
    searchForm.classList.remove("On");
  }

  closeForm.addEventListener("click", closeSearchForm);
  searchBtn.addEventListener("click", handleSearchForm);
})();
