import { createMuiTheme, responsiveFontSizes } from "@material-ui/core"
import THEMES from "app/constants/themeConstants"

const baseOptions = {
  direction: "ltr",
  typography: {
    fontFamily: "Lato, Roboto, Helvetica, sans-serif",
  },
}

const themeOptions = [
  {
    name: THEMES.LIGHT,
    palette: {
      type: "light",
      primary: {
        lighter: "hsl(134, 75%, 70%)",
        light: "hsl(134, 75%, 60%)",
        main: "hsl(134, 75%, 50%)",
        dark: "hsl(134, 75%, 40%)",
        darker: "hsl(134, 75%, 30%)",
        contrastText: "hsl(0, 0%, 100%)",
      },
      secondary: {
        lighter: "hsl(203, 56%, 50%)",
        light: "hsl(203, 56%, 40%)",
        main: "hsl(203, 56%, 30%)",
        dark: "hsl(203, 56%, 20%)",
        darker: "hsl(203, 56%, 10%)",
        contrastText: "hsl(0, 0%, 100%)",
      },
    },
  },
  {
    name: THEMES.DARK,
    palette: {
      type: "dark",
      primary: {
        lighter: "hsl(203, 56%, 50%)",
        light: "hsl(203, 56%, 40%)",
        main: "hsl(203, 56%, 30%)",
        dark: "hsl(203, 56%, 20%)",
        darker: "hsl(203, 56%, 10%)",
        contrastText: "hsl(0, 0%, 100%)",
      },
      secondary: {
        lighter: "hsl(134, 75%, 70%)",
        light: "hsl(134, 75%, 60%)",
        main: "hsl(134, 75%, 50%)",
        dark: "hsl(134, 75%, 40%)",
        darker: "hsl(134, 75%, 30%)",
        contrastText: "hsl(0, 0%, 100%)",
      },
      background: {
        paper: "hsl(203, 56%, 30%)",
        dark: "hsl(203, 56%, 15%)",
        default: "hsl(0, 0%, 25%)",
      },
    },
  },
]

export const createTheme = ({ colorScheme }) => {
  let currentThemeOptions = themeOptions.find(
    (theme) => theme.name === colorScheme
  )

  if (!currentThemeOptions) {
    console.warn(`No such theme as ${colorScheme}`)
    currentThemeOptions = themeOptions[0]
  }

  let theme = createMuiTheme({ ...baseOptions, ...currentThemeOptions })

  theme = responsiveFontSizes(theme)

  return theme
}
