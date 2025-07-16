import * as model from "./model.js";

import SubjectView from "./views/subjectView.js";

const showEmails = async function () {
  try {
    await model.loadEmails();
  } catch (err) {
    console.error(err);
  }
};

showEmails();
