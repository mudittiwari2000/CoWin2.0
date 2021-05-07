import { ThemeProvider } from "@material-ui/core"
import { useSelector } from "react-redux"
import { createTheme } from "theme"

const ThemeLayout = ({ children }) => {
  const themeState = useSelector((state) => state.theme)
  const theme = createTheme({
    colorScheme: themeState.type,
  })

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>
}

export default ThemeLayout
