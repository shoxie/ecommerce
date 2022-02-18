import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    usersRegister: [],
    currentUser: null,
    isFetching: false,
    errorLogin: false,
    errorRegister: false,
  },
  reducers: {
    loginStart: (state) => {
      state.isFetching = true;
    },
    loginSuccess: (state, action) => {
      state.isFetching = false;
      state.errorLogin = false;
      state.currentUser = action.payload;
    },
    loginFailure: (state) => {
      state.isFetching = false;
      state.errorLogin = true;
    },
    registerStart(state) {
      state.isFetching = true;
    },
    registerSuccess(state, action) {
      state.isFetching = false;
      state.usersRegister.push(action.payload);
      state.errorRegister = false;
    },
    registerFailure(state) {
      state.isFetching = false;
      state.errorRegister = true;
    },
  },
});

export const {
  loginStart,
  loginSuccess,
  loginFailure,
  registerStart,
  registerSuccess,
  registerFailure,
} = userSlice.actions;
export default userSlice.reducer;
