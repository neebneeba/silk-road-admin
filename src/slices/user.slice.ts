import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UserState {
  username: string;
  email: string;
  phone_number: number | null;
  profile_picture: string | null;
}

const initialState: UserState = {
  username: "",
  email: "",
  phone_number: null,
  profile_picture: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<UserState>) => {
      const { username, email, phone_number, profile_picture } = action.payload;

      state.username = username;
      state.email = email;
      state.phone_number = phone_number;
      state.profile_picture = profile_picture;
    },
    clearUser: () => initialState,
  },
});

export const { setUser, clearUser } = userSlice.actions;
export default userSlice.reducer;
