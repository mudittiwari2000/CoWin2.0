import { createSlice } from "@reduxjs/toolkit"
import THEMES from "app/constants/themeConstants"

const initialState = {
  type: "light",
  name: THEMES.DARK,
}

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    toggleTheme: (state) => {
      const type = state.type === "light" ? "dark" : "light"
      const name = state.name === THEMES.LIGHT ? THEMES.DARK : THEMES.LIGHT
      state.type = type
      state.name = name
    },
  },
})

export const { toggleTheme } = themeSlice.actions

export default themeSlice.reducer
