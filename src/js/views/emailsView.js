// import mainView from "./mainView.js";

class EmailsView {
  #parentEl = document.querySelector(".destination-emails");
  #tagContainer = this.#parentEl.querySelector(".tag-container");
  #selectedEmails = [];
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

    // Add email on Enter key
    emailsFieldEl.addEventListener(
      "keydown",
      this.handleEmailOnEnter.bind(this, emailsFieldEl)
    );
  }

  addClickOutsideDropdown() {
    document.addEventListener(
      "click",
      this.handleClickOutsideDropdown.bind(this)
    );
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

      item.addEventListener(
        "click",
        this.handleClickSuggestedEmail.bind(this, item, inputEl)
      );

      suggestionBox.appendChild(item);
    });

    inputEl.parentNode.appendChild(suggestionBox);
  }

  handleEmailOnEnter(inputEl, e) {
    if (e.key === "Enter") {
      e.preventDefault();
      const value = inputEl.value.trim();
      if (value && !this.#selectedEmails.includes(value)) {
        this.addTag(value);
        inputEl.value = "";
        this.closeAllLists();
      }
    }
  }

  handleClickSuggestedEmail(item, inputEl) {
    inputEl.value = item.querySelector("input").value;
    // this.closeAllLists();
    const value = inputEl.value;
    if (value && !this.#selectedEmails.includes(value)) {
      this.addTag(value);
      inputEl.value = "";
    }
  }

  handleClickOutsideDropdown(e) {
    if (!e.target.closest(".dropdown-items")) this.closeAllLists();
  }

  closeAllLists() {
    /* Close all suggestion dropdown lists in the document*/
    const items = document.querySelectorAll(".dropdown-items");
    items.forEach((item) => item.remove());
  }

  addTag(input) {
    if (this.#selectedEmails.includes(input)) return;
    this.#selectedEmails.push(input);

    const tag = document.createElement("div");
    tag.classList.add("tag");
    tag.innerHTML = `${input} <span class="remove-tag">&times;</span>`;

    tag
      .querySelector(".remove-tag")
      .addEventListener("click", this.removeTag.bind(this, input, tag));

    this.#tagContainer.appendChild(tag);
  }

  removeTag(input, tagEl) {
    this.#selectedEmails = this.#selectedEmails.filter(
      (email) => email !== input
    );
    tagEl.remove();
  }
}

export default new EmailsView();
