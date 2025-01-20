import { createSlice } from "@reduxjs/toolkit";

const initialState = {};
const Counterslice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    setField: (state = initialState, action) => {
      const { field, value } = action.payload;
      state[field] = value;
    },

    login: (state) => {
      const isEmailValid = state.email === "sabamukhtar@uog.edu.pk";
      const isPasswordValid =
        state.password === "tttt4444" && state.password.length >= 8;

      // Check for empty fields and validation errors
      if (!state.email || !state.password) {
        state.errorMessage = "Please enter both fields.";
      } else if (!isEmailValid || !isPasswordValid) {
        state.errorMessage =
          "Please enter valid email and password (8+ characters).";
      } else {
        // Reset error and proceed with login
        state.errorMessage = "";
        // Store submitted email and password in the Redux store
        state.submittedEmail = state.email;
        state.submittedPassword = state.password;

        // Clear the input fields after successful login
        state.email = "";
        state.password = "";
      }
    },

    reset: (state) => {
      state.email = "";
      state.password = "";
      state.errorMessage = ""; // Reset error message on reset
      state.submittedEmail = ""; // Reset submitted email
      state.submittedPassword = ""; // Reset submitted password
    },
  },
});

export const { setField, login, reset } = Counterslice.actions;
export default Counterslice.reducer;
