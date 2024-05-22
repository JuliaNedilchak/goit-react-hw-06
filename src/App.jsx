import ContactForm from "./components/ContactForm/ContactForm";
import SearchBox from "./components/SearchBox/SearchBox";
import ContactList from "./components/ContactList/ContactList";
import { useEffect, useState } from "react";
import { nanoid } from "nanoid";

const App = () => {
  const initialContactList = [
    { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
    { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
    { id: "id-3", name: "Eden Clements", number: "645-17-79" },
    { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
  ];
  const [contacts, setContacts] = useState(() => {
    const stringified = localStorage.getItem("contacts");
    if (!stringified) return initialContactList;
    const parsed = JSON.parse(stringified);
    return parsed;
  });
  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);

  const onAddContact = (formData) => {
    const newList = {
      ...formData,
      id: nanoid(),
    };
    setContacts([...contacts, newList]);
  };

  const [filter, setFilter] = useState("");
  const onChangeContact = (event) => {
    setFilter(event.target.value);
  };
  const filteredList = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLocaleLowerCase())
  );
  const onDeleteContact = (userId) => {
    setContacts((prevList) =>
      prevList.filter((contact) => contact.id !== userId)
    );
  };
  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm onAddContact={onAddContact} />
      <SearchBox filter={filter} onChangeContact={onChangeContact} />
      <ContactList contacts={filteredList} onDeleteContact={onDeleteContact} />
    </div>
  );
};

export default App;
