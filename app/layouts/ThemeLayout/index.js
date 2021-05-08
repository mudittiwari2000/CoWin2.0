import { ThemeProvider } from "@material-ui/core"
import { useSelector } from "react-redux"
import { createTheme } from "app/theme"

const ThemeLayout = ({ children }) => {
  const themeState = useSelector((state) => state.theme)
  const theme = createTheme({
    colorScheme: themeState.name,
  })

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>
}

export default ThemeLayout
