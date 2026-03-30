import React, { useEffect } from "react";
import css from "./App.module.css";
import ContactForm from "./ContactForm/ContactForm.jsx";
import SearchBox from "./SearchBox/SearchBox.jsx";
import ContactList from "./ContactList/ContactList.jsx";
import { useDispatch, useSelector } from "react-redux";
import { fetchContacts } from "../redux/contactsOps.js";
import { selectLoading, selectError } from "../redux/contactsSlice.js";

function App() {
  const dispatch = useDispatch();
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  return (
    <div className={css.appbox}>
      <h1 className={css.title}>Phonebook </h1>
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      <ContactForm />
      <SearchBox />
      <ContactList />
    </div>
  );
}

export default App;
