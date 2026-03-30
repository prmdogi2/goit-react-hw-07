import { configureStore } from "@reduxjs/toolkit";
import filtersReducer from "./filtersSlice.js";
import contactsSliceReducer from "./contactsSlice.js";

export const store = configureStore({
  reducer: {
    contacts: contactsSliceReducer,
    filters: filtersReducer,
  },
});
