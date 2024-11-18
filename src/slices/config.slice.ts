import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ConfigState {
  sidebarIsOpen: boolean;
}

const initialState: ConfigState = {
  sidebarIsOpen: false,
};

const configSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setConfig: (state, action: PayloadAction<ConfigState>) => {
      const { sidebarIsOpen } = action.payload;

      state.sidebarIsOpen = sidebarIsOpen;
    },
    clearConfig: () => initialState,
  },
});

export const { setConfig, clearConfig } = configSlice.actions;
export default configSlice.reducer;
