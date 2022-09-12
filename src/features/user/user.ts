import { createSlice } from "@reduxjs/toolkit";

export interface UserState {
  username?: string | null;
  isApproved?: boolean;
}

const initialState: UserState = {
  username: null,
  isApproved: false,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser(state, { payload }: { payload: UserState }) {
      state.isApproved = payload.isApproved;
      state.username = payload.username;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setUser } = userSlice.actions;

export default userSlice.reducer;
