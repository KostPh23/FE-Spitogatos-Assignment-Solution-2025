// import mainView from "./mainView.js";

class EmailsView {
  #parentEl = document.querySelector(".destination-emails");
  #tagContainer = this.#parentEl.querySelector(".tag-container");
  #dropdown = this.#parentEl.querySelector(".dropdown");
  #selectedEmails = [];

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

  addHandlerEnterAllEmails(handler) {
    const enterCustomersBtn = this.#parentEl.querySelector(
      ".enter-customers-button"
    );

    enterCustomersBtn.addEventListener(
      "click",
      this.handleEnterAllEmails.bind(this, handler)
    );
  }

  addHandlerRemoveAllEmails(handler) {
    const removeCustomersBtn = this.#parentEl.querySelector(
      ".remove-customers-button"
    );

    removeCustomersBtn.addEventListener(
      "click",
      this.handleRemoveAllEmails.bind(this, handler)
    );
  }

  addClickOutsideDropdown() {
    document.addEventListener(
      "click",
      this.handleClickOutsideDropdown.bind(this)
    );
  }

  renderEmailDestinations() {
    const markup = `
      <label for="destination-emails" class="emails-title"
        >List of recipients</label
      >
      <div class="tag-container"></div>
      <div class="dropdown">
        <input
          type="text"
          placeholder="Type name or email"
          class="emails-field"
        />
      </div>
      <div class="emails-buttons">
        <button type="button" class="enter-customers-button">
          Enter all customers
        </button>
        <button type="button" class="remove-customers-button">
          Remove all clients
        </button>
      </div>
    `;
    this.#clear();
    this.#parentEl.insertAdjacentHTML("afterbegin", markup);
    this.#tagContainer = this.#parentEl.querySelector(".tag-container");
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

  renderAddAllTags(emails) {
    emails.forEach((email) => this.addTag(email));
  }

  renderRemoveAllTags(emails) {
    emails.forEach((email) => {
      const tagEls = [...this.#tagContainer.querySelectorAll(".tag")];
      tagEls.forEach((tagEl) => {
        const tagEmail = tagEl.textContent.replace(/\s×$/, "");
        if (email === tagEmail) this.removeTag(email, tagEl);
      });
    });
  }

  renderLoader() {
    const markup = `
      <div class="loader-container">
        <div class="loader"></div>
      </div>
    `;
    this.#clear(this.#parentEl);
    this.#parentEl.insertAdjacentHTML("afterbegin", markup);
  }

  renderError(errorMsg) {
    const markup = `
      <div class="error">&#9888; ${errorMsg}</div>
    `;
    this.#dropdown.insertAdjacentHTML("afterbegin", markup);
  }

  handleEmailOnEnter(inputEl, e) {
    try {
      if (e.key === "Enter") {
        e.preventDefault();
        const value = inputEl.value.trim();
        this.validateEmailsText(value);
        if (value && !this.#selectedEmails.includes(value)) {
          this.addTag(value);
          inputEl.value = "";
          this.closeAllLists();
        }
      }
    } catch (err) {
      this.renderError(err.message);
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

  handleEnterAllEmails(handler) {
    // e.preventDefault();
    handler();
  }

  handleRemoveAllEmails(handler) {
    // e.preventDefault();
    handler();
  }

  closeAllLists() {
    // Close all suggestion dropdown lists in the document
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

  validateEmailsText(text) {
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(text))
      throw new Error("Emails must be in valid email format!");
  }

  getSelectedEmails() {
    return this.#selectedEmails;
  }

  #clear(el) {
    // Clears the children of a given element
    el.innerHTML = "";
  }
}

export default new EmailsView();
