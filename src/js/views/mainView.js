class MainView {
  #parentEl = document.querySelector(".main-form");

  // listenCloseSuggestionLists() {
  //   document.addEventListener("click", function (e) {
  //     closeAllLists(e.target);
  //   });
  // }
  // closeAllLists(el, curFieldEl) {
  //   /* Close all suggestion dropdown lists in the destination-emails
  //   box, except the one passed as an argument:*/
  //   const x = document.querySelectorAll(".dropdown-items");
  //   for (let i = 0; i < x.length; i++)
  //     if (el !== x[i] && el !== curFieldEl) x[i].parentNode.removeChild(x[i]);
  // }

  addHandlerSubmitForm(handler) {
    this.#parentEl.addEventListener("submit", function (e) {
      e.preventDefault();
      handler();
    });
  }
}

export default new MainView();
