import * as model from "../../model.js";

import SubjectView from "./subjectView.js";

const showEmails = async function () {
  try {
    // 1) Load emails
    await model.loadEmails();

    console.log(model.state);
  } catch (err) {
    console.error(err);
  }
};

showEmails();
