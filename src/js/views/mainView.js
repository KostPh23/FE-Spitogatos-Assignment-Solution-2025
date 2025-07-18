class MainView {
  #parentEl = document.querySelector(".main-form");
  #closeBtn = this.#parentEl.querySelector(".close-button");
  #cancelBtn = this.#parentEl.querySelector(".cancel-button");

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

  addHandlerCloseForm() {
    this.#closeBtn.addEventListener("click", this.handleCloseForm.bind(this));
    this.#cancelBtn.addEventListener("click", this.handleCloseForm.bind(this));
  }

  handleCloseForm() {
    this.#parentEl.classList.toggle("hidden");
  }
}

export default new MainView();
