export const state = {
  subject: "",
  description: "",
  emails: [],
};

export const loadEmails = async function () {
  try {
    const res = await fetch(
      "https://686547495b5d8d0339808f5d.mockapi.io/spitogatos/api/customer-email-lookup"
    );
    const data = await res.json();
    state.emails = data;
  } catch (err) {
    console.error(err);
  }
};

export const saveSubject = function () {
  state.subject;
};
