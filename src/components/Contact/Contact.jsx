import s from "./Contact.module.css";
import { FaPhoneAlt } from "react-icons/fa";
import { IoPersonSharp } from "react-icons/io5";

const Contact = ({ name, number }) => {
  return (
    <div>
      <div className={s.list}>
        <p className={s.text}>
          <IoPersonSharp />
          {name}
        </p>
      </div>
      <div className={s.list}>
        <p className={s.phone}>
          <FaPhoneAlt /> {number}
        </p>
      </div>
    </div>
  );
};

export default Contact;
