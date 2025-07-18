class SubjectView {
  #parentEl = document.querySelector(".subject");

  // addHandlerAddSubject(handler) {
  //   this.#parentEl
  //     .querySelector(".subject-field")
  //     .addEventListener("submit", function (e) {
  //       e.preventDefault();
  //       handler();
  //     });
  // }

  getSubjectText() {
    const text = this.#parentEl.querySelector(".subject-field").value;
    this.validateSubjectText(text);
    return text;
  }

  validateSubjectText(text) {
    if (!text) throw new Error("Subject is required!");
  }
}

export default new SubjectView();
