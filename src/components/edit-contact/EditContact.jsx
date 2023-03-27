import React from "react";
import { Redirect, useParams } from "react-router-dom";
import UserContactForm from "../contact-form/ContactForm";

const EditContact = ({ updateContact, contacts, match }) => {
  // const { id } = match.params;
  const { id } = useParams();

  const contactToEdit = contacts.find((contact) => contact.id === +id);

  if (!contactToEdit) {
    return <Redirect to="/" />;
  }

  const handleSubmit = (id, contact) => {
    updateContact(id, contact);
  };

  return (
    <UserContactForm
      handleSubmit={handleSubmit}
      contactToEdit={contactToEdit}
    />
  );
};

export default EditContact;
