import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const contactSchema = Yup.object({
  name: Yup.string()
    .required("поля повинні бути обов'язковими для заповнення")
    .max(50, "максимальна кількість символів - 50")
    .min(3, "мінімальна кількість символів - 3"),
  number: Yup.number()
    .required("поля повинні бути обов'язковими для заповнення")
    .min(2, "мінімальна кількість символів - 2"),
});

const INITIAL_VALUES = {
  name: "",
  number: "",
};
const ContactForm = ({ onAddContact }) => {
  const submitForm = (values, actions) => {
    onAddContact(values);
    actions.resetForm();
    //onAddContact(formData);
    //event.currentTarget.reset();
  };

  return (
    <Formik
      initialValues={INITIAL_VALUES}
      onSubmit={submitForm}
      validationSchema={contactSchema}
    >
      <Form>
        <label>
          <span>Name</span>
          <br />
          <Field type="text" name="name" />
          <ErrorMessage component="p" name="name" />
        </label>
        <br />
        <label>
          <span>Number</span>
          <br />
          <Field type="number" name="number" />
          <ErrorMessage component="p" name="number" />
        </label>
        <br />
        <button type="submit">Add contact</button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
