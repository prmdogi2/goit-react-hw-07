import css from "./ContactForm.module.css";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { addContact } from "/src/redux/contactsOps.js";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useId } from "react";

const UserSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  number: Yup.string()
    .min(3, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
});

export function ContactForm() {
  const nameFieldId = useId();
  const numberFieldId = useId();
  const dispatch = useDispatch();

  const handleSubmit = (value, actions) => {
    dispatch(addContact({ name: value.name, number: value.number }));
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={{ name: "", number: "" }}
      validationSchema={UserSchema}
      onSubmit={handleSubmit}
      className={css.formContainer}
    >
      <Form className={css.formWrapper}>
        <div className={css.formbox}>
          <label className={css.labelone} htmlFor={nameFieldId}>
            Name
          </label>
          <Field
            className={css.fieldone}
            type="text"
            name="name"
            id={nameFieldId}
          ></Field>
          <ErrorMessage
            className={css.errormsj}
            name="name"
            component="span"
          ></ErrorMessage>
        </div>
        <div className={css.formboxtwo}>
          <label className={css.labeltwo} htmlFor={numberFieldId}>
            {" "}
            Number
          </label>
          <Field
            className={css.fieldtwo}
            id={numberFieldId}
            type="text"
            name="number"
          ></Field>
          <ErrorMessage
            className={css.errormsjone}
            name="number"
            component="span"
          ></ErrorMessage>
        </div>
        <button className={css.btn} type="submit">
          {" "}
          Add Contact
        </button>
      </Form>
    </Formik>
  );
}
export default ContactForm;
