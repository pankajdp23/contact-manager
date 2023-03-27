import { useEffect, useState } from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import "./App.css";
import ContactForm from "./components/contact-form/ContactForm";
import EditContact from "./components/edit-contact/EditContact";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import PageNotFound from "./components/not-found/PageNotFound";

function App() {
  const [contacts, setContacts] = useState(
    JSON.parse(localStorage.getItem("contacts")) || []
  );

  const addContact = (contact) => {
    setContacts([...contacts, contact]);
  };

  const updateContact = (id, updatedContact) => {
    console.log("id", id, updatedContact);
    setContacts(
      contacts.map((contact) => {
        if (contact.id === id) {
          return { ...contact, ...updatedContact };
        }
        return contact;
      })
    );
  };

  const deleteContact = (id) => {
    // test commit
    // console.log('filter', contacts.filter(contact => contact.id !== id));
    setContacts(contacts.filter((contact) => contact.id !== id));
  };

  useEffect(() => {
    try {
      localStorage.setItem("contacts", JSON.stringify(contacts));
    } catch (error) {
      console.log(error);
    }
  }, [contacts]);

  console.log(contacts);
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <div className="container">
          <Switch>
            <Route
              path="/"
              render={(props) => (
                <Home
                  {...props}
                  contacts={contacts}
                  deleteContact={deleteContact}
                />
              )}
              exact
            />
            <Route
              path="/addContact"
              render={(props) => (
                <ContactForm {...props} addContact={addContact} />
              )}
            />
            <Route
              path="/edit/:id" // URL parameters
              render={(props) => (
                <EditContact
                  {...props}
                  updateContact={updateContact}
                  contacts={contacts}
                />
              )}
            />

            <Route component={PageNotFound} />
          </Switch>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
