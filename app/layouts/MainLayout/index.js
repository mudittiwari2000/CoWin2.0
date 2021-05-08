import { Box, CssBaseline, makeStyles, Paper, Slide } from "@material-ui/core"
import useScrollTrigger from "@material-ui/core/useScrollTrigger"
import Navbar from "app/components/Navbar"
import { StyledBox } from "./styles"

const useStyles = makeStyles((theme) => ({
  root: {},
  mainContent: {
    background: theme.palette.background.dark,
    flexGrow: 1,
    paddingTop: "calc(6vh + 3em)",
  },
  flexGrow: {
    flexGrow: 1,
  },
}))

const MainLayout = ({ children }) => {
  const classes = useStyles()

  return (
    <StyledBox>
      <CssBaseline />
      <Navbar />
      <main className={classes.mainContent}>{children}</main>
    </StyledBox>
  )
}

export default MainLayout
