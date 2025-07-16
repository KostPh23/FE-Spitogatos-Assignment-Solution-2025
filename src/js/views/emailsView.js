class EmailsView {
  #parentEl = document.querySelector(".destination-emails");
  #data;

  // Autocomplete component
  addHandlerRenderEmails(handler) {
    const emailsFieldEl = this.#parentEl.querySelector(".emails-field");
    emailsFieldEl.addEventListener("keydown", function (e) {
      handler(e);
    });
  }
}

export default new EmailsView();
