class SubjectView {
  #parentEl = document.querySelector(".subject");
  #data;

  validateSubjectText(text) {
    if (!text) throw new Error("Subject is required!");
  }

  addSubject() {
    const text = this.#parentEl.querySelector(".subject-field").value;
    this.validateSubjectText(text);
    this.#data = text;
  }
}

export default new SubjectView();
