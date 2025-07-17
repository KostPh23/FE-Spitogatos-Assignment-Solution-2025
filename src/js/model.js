export const state = {
  subject: "",
  description: "",
  customers: [],
  emails: [],
  relevantEmails: [],
};

export const loadCustomers = async function () {
  try {
    const res = await fetch(
      "https://686547495b5d8d0339808f5d.mockapi.io/spitogatos/api/customer-email-lookup"
    );
    const data = await res.json();

    state.customers = data.map((customer) => {
      return { name: customer.name, email: customer.email, id: customer.id };
    });
  } catch (err) {
    console.error(err);
    throw err;
  }
};

export const loadEmails = async function () {
  try {
    const res = await fetch(
      "https://686547495b5d8d0339808f5d.mockapi.io/spitogatos/api/customer-email-lookup"
    );
    const data = await res.json();

    state.emails = data.map((customer) => {
      return customer.email;
    });
  } catch (err) {
    console.error(err);
    throw err;
  }
};

export const filterEmails = function (input) {
  state.relevantEmails = state.emails.filter((email) =>
    email.startsWith(input)
  );
};

export const saveForm = function (form) {
  state.subject = form.subject;
  state.description = form.description;
  state.emails = form.emails.map((customer) => {
    return { name: customer.name, email: customer.email, id: customer.id };
  });
};

export const saveSubject = function (text) {
  state.subject = text;
};
