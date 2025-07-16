class FormView {
  parentEl = document.querySelector(".main-form");
  _data;

  addSubject(data) {
    this._data = this.parentEl.querySelector(".subject-field");
    console.log(this._data);
  }

  validateDescriptionText(text) {
    if (text.length < 10)
      throw new Error("Description must be 10 characters or more");
  }

  validateEmailsText(text) {
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(text))
      throw new Error("Emails must be in valid email format");
  }

  handleForm() {
    mainForm.addEventListener("submit", function (e) {
      try {
        e.preventDefault();

        const subjectText = subjectField.value;
        const descriptionText = descriptionField.value;
        const emailsText = emailsField.value;

        validateSubjectText(subjectText);
        validateDescriptionText(descriptionText);
        validateEmailsText(emailsText);
        console.log("success");
      } catch (err) {
        console.error(err);
      }
    });
  }
}

const mainForm = document.querySelector(".main-form");
const subjectField = document.querySelector(".subject-field");
const descriptionField = document.querySelector(".description-field");
const emailsField = document.querySelector(".emails-field");

export default new FormView();
