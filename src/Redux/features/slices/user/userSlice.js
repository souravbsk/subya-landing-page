import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  createUserWithEmailAndPassword,
  updatePhoneNumber,
  updateProfile,
} from "firebase/auth";
import auth from "../../../../Utility/firebase.init";

const initialState = {
  name: "",
  email: "",
  isLoading: false,
  isError: false,
  error: "",
};
export const createUser = createAsyncThunk(
  "users/createUser",
  async ({ email, password, name }) => {
  
      console.log(email, password);
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      await updateProfile(auth.currentUser, { displayName: name });
      // await updatePhoneNumber(auth.currentUser, phone);
      console.log(userCredential, "user credential ");
      const newUser = {
        email: userCredential.user.email,
        name: userCredential.user.displayName,
      };

      return newUser;
  
  }
);

const userSlice = createSlice({
  name: "userSlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createUser.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.error = "";
      })

      .addCase(createUser.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.name = payload.name;
        state.email = payload.email;
      })
      .addCase(createUser.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.error = action.error.message;
      });
  },
});

export default userSlice.reducer;
