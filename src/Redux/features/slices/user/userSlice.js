import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  updateProfile,
} from "firebase/auth";
import auth from "../../../../Utility/firebase.init";

const initialState = {
  user: null,
  isLoading: false,
  isError: false,
  error: "",
};

// create new user
export const createUser = createAsyncThunk(
  "users/createUser",
  async ({ email, password, name }) => {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    await updateProfile(auth.currentUser, { displayName: name });

    return userCredential.user;
  }
);

// login user
export const loginUser = createAsyncThunk(
  "users/loginUser",
  async ({ email, password }) => {
    const userData = await signInWithEmailAndPassword(auth, email, password);
    return userData?.user;
  }
);

//logout user

export const signInWithGoogle = createAsyncThunk(
  "users/signInWithGoogle",
  async () => {
    const googleProvider = new GoogleAuthProvider();
    const userData = await signInWithPopup(auth, googleProvider);
    return userData?.user;
  }
);

const userSlice = createSlice({
  name: "userSlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    //register chain
    builder
      .addCase(createUser.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.error = "";
      })

      .addCase(createUser.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.user = payload;
        state.isError = false;
        state.error = "";
      })
      .addCase(createUser.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.error = action.error.message;
      });

    //login chain
    builder
      .addCase(loginUser.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.error = "";
      })
      .addCase(loginUser.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.user = payload;
        state.isError = false;
        state.error = "";
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.error = action.error.message;
      });
  },
});

export default userSlice.reducer;
