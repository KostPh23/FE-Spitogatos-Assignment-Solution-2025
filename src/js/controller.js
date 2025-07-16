import * as model from "./model.js";

import subjectView from "./views/subjectView.js";
import emailsView from "./views/emailsView.js";

const controlShowEmails = async function (input) {
  try {
    // 1) Load emails
    await model.loadEmails();
    console.log(model.state.emails);

    // 2) Filter emails
    const relevantEmails = model.state.emails.filter((email) => email);
    console.log(relevantEmails);
  } catch (err) {
    console.error(err);
  }
};

const init = function () {
  emailsView.addHandlerRenderEmails(controlShowEmails);
};

init();
