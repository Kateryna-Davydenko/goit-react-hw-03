import Contact from "../Contact/Contact";
import s from "./ContactList.module.css";

const ContactList = ({ contacts, onDelete }) => {
  const handleDelete = (id) => {
    onDelete(id);
  };
  return (
    <div>
      {contacts.map((contact) => (
        <div className={s.wrapper} key={contact.id}>
          <Contact name={contact.name} number={contact.number} />
          <button onClick={() => handleDelete(contact.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
};
export default ContactList;
