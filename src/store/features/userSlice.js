import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  email: "",
  uid: "",
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setCurrentUser: (state, action) => {
      state.email = action.payload.email;
      state.uid = action.payload.uid;
    },
  },
});

export const { setCurrentUser } = userSlice.actions;
export default userSlice.reducer;
