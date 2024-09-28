import React, { useState, useEffect } from "react";
import ContactList from "./components/ContactList/ContactList";
import ContactForm from "./components/ContactForm/ContactForm";
import SearchBox from "./components/SearchBox/SearchBox";

const contacts = [
  { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
  { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
  { id: "id-3", name: "Eden Clements", number: "645-17-79" },
  { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
];

const App = () => {
  const [filter, setFilter] = useState("");
  const [allContacts, setAllContacts] = useState(contacts);

  useEffect(() => {
    const localContacts = JSON.parse(localStorage.getItem("contacts"));
    if (localContacts) {
      setAllContacts(localContacts);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(allContacts));
  }, [allContacts]);

  const filteredContacts = allContacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };

  const addContact = (newContact) => {
    setAllContacts([...allContacts, newContact]);
  };

  const handleDelete = (id) => {
    const updatedContacts = allContacts.filter((contact) => contact.id !== id);
    setAllContacts(updatedContacts);
  };

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm onContact={addContact} />
      <SearchBox onChange={handleFilterChange} />
      <ContactList contacts={filteredContacts} onDelete={handleDelete} />
    </div>
  );
};

export default App;
