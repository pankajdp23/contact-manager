import React from "react";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import { useHistory } from "react-router-dom";
import "./contact.css";

const Contact = ({
  id,
  phoneNumber,
  firstName,
  lastName,
  updateContact,
  deleteContact,
}) => {
  const history = useHistory();
  return (
    <tr key={phoneNumber}>
      <td>{firstName}</td>
      <td>{lastName}</td>
      <td>{phoneNumber}</td>
      <td>
        <AiFillEdit
          size={25}
          className="icon"
          onClick={() => history.push(`/edit/${id}`)}
        />
      </td>
      <td>
        <AiFillDelete
          size={25}
          className="icon"
          onClick={() => {
            const shouldDelete = window.confirm(
              `Are you sure you want to delete contact for user ${firstName} ${lastName}`
            );
            if (shouldDelete) {
              deleteContact(id);
            }
          }}
        />
      </td>
    </tr>
  );
};

export default Contact;
