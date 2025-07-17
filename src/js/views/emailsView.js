// import mainView from "./mainView.js";

class EmailsView {
  #parentEl = document.querySelector(".destination-emails");
  #data;

  // // Autocomplete component
  // addHandlerRenderEmails(handler) {
  //   const emailsFieldEl = this.#parentEl.querySelector(".emails-field");
  //   emailsFieldEl.addEventListener("input", function () {
  //     handler(this.value);
  //   });
  // }

  // // Suggestions dropdown
  // addHandlerRenderSuggestions(handler) {
  //   const emailsFieldEl = this.#parentEl.querySelector(".emails-field");
  //   emailsFieldEl.addEventListener("input", function () {
  //     handler(this);
  //   });
  // }

  addHandlerInput(handler) {
    const emailsFieldEl = this.#parentEl.querySelector(".emails-field");
    emailsFieldEl.addEventListener("input", function () {
      handler(this);
    });
  }

  renderSuggestions(emails, inputEl) {
    const val = inputEl.value;

    this.closeAllLists();

    if (!val || emails.length === 0) return;

    const suggestionBox = document.createElement("div");
    suggestionBox.setAttribute("class", "dropdown-items");

    emails.forEach((email) => {
      const item = document.createElement("div");
      item.innerHTML = `<strong>${email.substr(
        0,
        val.length
      )}</strong>${email.substr(val.length)}`;
      item.innerHTML += `<input type='hidden' value='${email}'>`;

      item.addEventListener("click", function () {
        inputEl.value = this.querySelector("input").value;
        EmailsView.closeAllLists();
      });

      suggestionBox.appendChild(item);
    });

    inputEl.parentNode.appendChild(suggestionBox);
  }

  closeAllLists() {
    /* Close all suggestion dropdown lists in the document*/
    const items = document.querySelectorAll(".dropdown-items");
    items.forEach((item) => item.remove());
  }
}

export default new EmailsView();
