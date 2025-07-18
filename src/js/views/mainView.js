class MainView {
  #parentEl = document.querySelector(".main-form");
  #closeBtn = this.#parentEl.querySelector(".close-button");
  #cancelBtn = this.#parentEl.querySelector(".cancel-button");

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
