class DescriptionView {
  #parentEl = document.querySelector(".description");
  #fieldContainer = this.#parentEl.querySelector(".field-container");

  getDescriptionText() {
    try {
      const text = this.#parentEl.querySelector(".description-field").value;
      this.validateDescriptionText(text);
      return text;
    } catch (err) {
      this.renderError(err.message);
    }
  }

  validateDescriptionText(text) {
    if (text.length < 10)
      throw new Error("Description must be 10 characters or more");
  }

  renderError(errorMsg) {
    const markup = `
      <div class="error">&#9888; ${errorMsg}</div>
    `;
    this.#fieldContainer.insertAdjacentHTML("afterbegin", markup);
  }
}

export default new DescriptionView();
