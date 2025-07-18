class DescriptionView {
  #parentEl = document.querySelector(".description");

  getDescriptionText() {
    const text = this.#parentEl.querySelector(".description-field").value;
    this.validateDescriptionText(text);
    return text;
  }

  validateDescriptionText(text) {
    if (text.length < 10)
      throw new Error("Description must be 10 characters or more");
  }
}

export default new DescriptionView();
