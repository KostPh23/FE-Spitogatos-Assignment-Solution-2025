import * as model from "./model.js";

// import mainView from "./views/mainView.js";
import subjectView from "./views/subjectView.js";
import emailsView from "./views/emailsView.js";

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

const controlEmailInput = async function (inputEl) {
  try {
    // 1) Load emails
    await model.loadEmails();

    // 2) Filter emails
    // console.log(inputEl.value);
    model.filterEmails(inputEl.value);
    // console.log(model.state.relevantEmails);

    // 3) Show suggestions in a dropdown
    emailsView.renderSuggestions(model.state.relevantEmails, inputEl);
  } catch (err) {
    console.error(err);
  }
};

const init = function () {
  // emailsView.addHandlerRenderEmails(controlShowEmails);
  // emailsView.addHandlerRenderSuggestions(controlShowSuggestions);
  // mainView.listenCloseSuggestionLists();
  emailsView.addHandlerInput(controlEmailInput);
  emailsView.addClickOutsideDropdown();
};

init();
