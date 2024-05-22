import css from "./Contact.module.css";
const Contact = ({ name, number, id, onDeleteContact }) => {
  return (
    <div className={css.block}>
      <div className={css.contactDetail}>
        <p>{name}</p>
        <p>{number}</p>
      </div>
      <button
        className={css.buttonDelete}
        type="button"
        onClick={() => onDeleteContact(id)}
      >
        Delete
      </button>
    </div>
  );
};

export default Contact;
