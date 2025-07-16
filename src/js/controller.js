import * as model from "./model.js";

import subjectView from "./views/subjectView.js";
import emailsView from "./views/emailsView.js";

const controlShowEmails = async function (input) {
  try {
    // 1) Load emails
    await model.loadEmails();
    // console.log(model.state.emails);

    // 2) Filter emails
    console.log(input);
    const relevantEmails = model.state.emails.filter((email) =>
      email.startsWith(input)
    );
    console.log(relevantEmails);

    // 3) Show suggestions in a dropdown
    emailsView.renderSuggestions(relevantEmails);
  } catch (err) {
    console.error(err);
  }
};

const controlShowSuggestions = function (input) {
  try {
    // 3) Show suggestions in a dropdown

    emailsView.renderSuggestions();
  } catch (err) {
    console.error(err);
  }
};

const init = function () {
  emailsView.addHandlerRenderEmails(controlShowEmails);
  // emailsView.addHandlerRenderSuggestions(controlShowSuggestions);
};

init();
