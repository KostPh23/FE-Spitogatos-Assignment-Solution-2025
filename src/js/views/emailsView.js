class EmailsView {
  #parentEl = document.querySelector(".destination-emails");
  #data;

  // Autocomplete component
  addHandlerRenderEmails(handler) {
    const emailsFieldEl = this.#parentEl.querySelector(".emails-field");
    emailsFieldEl.addEventListener("keyup", function (e) {
      if (e.key.length !== 1) return;
      handler(emailsFieldEl.value);
    });
  }

  // Suggestions dropdown
  // addHandlerRenderSuggestions(handler) {
  //   const emailsFieldEl = this.#parentEl.querySelector(".emails-field");
  //   emailsFieldEl.addEventListener("keyup", function (e) {
  //     if (e.key.length !== 1) return;
  //     handler(emailsFieldEl.value);
  //   });
  // }
  addHandlerRenderSuggestions(handler) {
    const emailsFieldEl = this.#parentEl.querySelector(".emails-field");
    let currentFocus;
    emailsFieldEl.addEventListener("input", function (e) {
      if (e.key.length !== 1) return;
      handler(emailsFieldEl.value);
    });
  }

  renderSuggestions(emails) {
    const markup = `
      <div class="dropdown ${emails.length === 0 ? "hidden" : ""}">
        <div class="dropdown-content">
          <p>Hello World!</p>
        </div>
      </div>
    `;
    this.#parentEl.insertAdjacentHTML("afterbegin", markup);
  }
}

export default new EmailsView();
