import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  type: "light",
}

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    toggleTheme: (state) => {
      const res = state.type === "light" ? "dark" : "light"
      state.type = res
    },
  },
})

export const { toggleTheme } = themeSlice.actions

export default themeSlice.reducer
