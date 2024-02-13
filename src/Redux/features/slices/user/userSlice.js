import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { createUserWithEmailAndPassword } from "firebase/auth";
import auth from "../../../../Utility/firebase.init";

const initialState = {
  name: "",
  email: "",
  isLoading: true,
  isError: false,
  error: "",
};
export const createUser = createAsyncThunk(
  "users/createUser",
  async ({ email, password }) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      console.log(userCredential, "user credential ");
      return userCredential.user;
    } catch (error) {
      throw error;
    }
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
