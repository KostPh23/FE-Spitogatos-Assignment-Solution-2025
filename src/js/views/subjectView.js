class SubjectView {
  #parentEl = document.querySelector(".subject");
  #fieldContainer = this.#parentEl.querySelector(".field-container");

  // addHandlerAddSubject(handler) {
  //   this.#parentEl
  //     .querySelector(".subject-field")
  //     .addEventListener("submit", function (e) {
  //       e.preventDefault();
  //       handler();
  //     });
  // }

  getSubjectText() {
    try {
      const text = this.#parentEl.querySelector(".subject-field").value;
      this.validateSubjectText(text);
      return text;
    } catch (err) {
      this.renderError(err.message);
    }
  }

  validateSubjectText(text) {
    if (!text) throw new Error("Subject is required!");
  }

  renderError(errorMsg) {
    const markup = `
      <div class="error">&#9888; ${errorMsg}</div>
    `;
    this.#fieldContainer.insertAdjacentHTML("afterbegin", markup);
  }
}

export default new SubjectView();
