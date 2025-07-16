"use strict";

const mainForm = document.querySelector(".main-form");
const subjectField = document.querySelector(".subject-field");
const descriptionField = document.querySelector(".description-field");
const emailsField = document.querySelector(".emails-field");

const validateSubjectText = function (text) {
  if (!text) throw new Error("Subject is required!");
};

const validateDescriptionText = function (text) {
  if (text.length < 10)
    throw new Error("Description must be 10 characters or more");
};

const validateEmailsText = function (text) {
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(text))
    throw new Error("Emails must be in valid email format");
};

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
