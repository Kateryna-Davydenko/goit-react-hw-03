import { Formik, Form, Field, ErrorMessage } from "formik";
import { nanoid } from "nanoid";
import s from "./ContactForm.module.css";
import * as Yup from "yup";

const ContactForm = ({ onContact }) => {
  const initialValues = {
    name: "",
    number: "",
    id: nanoid(),
  };
  const handleSubmit = (values, options) => {
    options.resetForm();
    const newContact = {
      name: values.name,
      number: values.number,
      id: nanoid(),
    };
    onContact(newContact);
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string()
      .required("Required")
      .min(3, "Name must be at least 3 characters")
      .max(50, "Name can be maximum 50 characters"),
    number: Yup.string()
      .required("Required")
      .min(3, "Number must be at least 3 characters")
      .max(50, "Number can be maximum 50 characters"),
  });
  return (
    <div className={s.formWrapper}>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form className={s.form}>
          <label className={s.label}>
            <span>Name</span>
            <Field className={s.input} type="text" id="name" name="name" />
            <ErrorMessage name="name" component="div" />
          </label>
          <label className={s.label}>
            <span>Number</span>
            <Field className={s.input} type="text" id="number" name="number" />
            <ErrorMessage name="number" component="div" />
          </label>
          <button type="submit">Add contact</button>
        </Form>
      </Formik>
    </div>
  );
};
export default ContactForm;
