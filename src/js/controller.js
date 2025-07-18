import * as model from "./model.js";

import mainView from "./views/mainView.js";
import emailsView from "./views/emailsView.js";
import subjectView from "./views/subjectView.js";
import descriptionView from "./views/descriptionView.js";

// const controlShowEmails = async function (input) {
//   try {
//     // 1) Load emails
//     await model.loadEmails();
//     // console.log(model.state.emails);

//     // 2) Filter emails
//     console.log(input);
//     model.filterEmails(input);
//     console.log(model.state.relevantEmails);
//   } catch (err) {
//     console.error(err);
//   }
// };

// const controlShowSuggestions = function (inputEl) {
//   try {
//     // 3) Show suggestions in a dropdown
//     emailsView.renderSuggestions(model.state.relevantEmails, inputEl);
//   } catch (err) {
//     console.error(err);
//   }
// };

const controlSubmitForm = function () {
  try {
    model.state.emails = emailsView.getSelectedEmails();
    model.state.subject = subjectView.getSubjectText();
    model.state.description = descriptionView.getDescriptionText();
    console.log(model.state);
  } catch (err) {
    console.error(err);
  }
};

const controlEmailInput = async function (inputEl) {
  try {
    // 1) Load and filter emails
    await model.loadAndFilterEmails(inputEl);

    // 2) Show suggestions in a dropdown
    emailsView.renderSuggestions(model.state.relevantEmails, inputEl);
  } catch (err) {
    console.error(err);
  }
};

const controlEnterAllEmails = async function () {
  try {
    // 1) Fetch all emails
    await model.loadEmails();

    // 2) Render all emails as tags
    emailsView.renderAddAllTags(model.state.emails);
  } catch (err) {
    console.error(err);
  }
};

const controlRemoveAllEmails = function () {
  try {
    // 1) Render all emails as tags (it will be empty)
    emailsView.renderRemoveAllTags(model.state.emails);

    // 2) Remove all emails
    model.state.emails.length = 0;
  } catch (err) {
    console.error(err);
  }
};

const controlAddSubject = function () {
  try {
    const text = subjectView.addSubjectText();
    console.log(text);
  } catch (err) {
    console.error(err);
  }
};

const init = function () {
  // emailsView.addHandlerRenderEmails(controlShowEmails);
  // emailsView.addHandlerRenderSuggestions(controlShowSuggestions);
  // mainView.listenCloseSuggestionLists();
  mainView.addHandlerSubmitForm(controlSubmitForm);
  emailsView.addHandlerInput(controlEmailInput);
  emailsView.addHandlerEnterAllEmails(controlEnterAllEmails);
  emailsView.addHandlerRemoveAllEmails(controlRemoveAllEmails);
  emailsView.addClickOutsideDropdown();
  // subjectView.addHandlerAddSubject(controlAddSubject);
};

init();
