import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "",
  email: "",
  password: "",
  avatar: "https://picsum.photos/800",
  errorMessage: "",
  submittedEmail: "",
  submittedPassword: "",
};

const Counterslice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    setField: (state, action) => {
      const { field, value } = action.payload;
      state[field] = value;
    },

    login: (state) => {
      const isEmailValid = state.email === "sabamukhtar@uog.edu.pk";
      const isPasswordValid =
        state.password === "tttt4444" && state.password.length >= 8;

      // Validation logic
      if (!state.email || !state.password || !state.name) {
        state.errorMessage = "Please fill out all fields.";
      } else if (!isEmailValid || !isPasswordValid) {
        state.errorMessage =
          "Please enter a valid email and password (8+ characters).";
      } else {
        // Successful login
        state.errorMessage = "";
        state.submittedEmail = state.email;
        state.submittedPassword = state.password;

        // Clear the input fields
        state.name = "";
        state.email = "";
        state.password = "";
      }
    },

    reset: (state) => {
      state.name = "";
      state.email = "";
      state.password = "";
      state.errorMessage = "";
      state.submittedEmail = "";
      state.submittedPassword = "";
    },
  },
});

export const { setField, login, reset } = Counterslice.actions;
export default Counterslice.reducer;
