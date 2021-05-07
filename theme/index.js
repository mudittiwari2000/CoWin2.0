import { createMuiTheme, responsiveFontSizes } from "@material-ui/core"

export const createTheme = ({ colorScheme }) => {
  let theme = createMuiTheme({
    palette: {
      type: colorScheme,
    },
  })
  theme = responsiveFontSizes(theme)
  return theme
}
