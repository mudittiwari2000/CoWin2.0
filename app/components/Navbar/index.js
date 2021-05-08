import Link from "next/link"
import clsx from "clsx"
import {
  AppBar,
  Button,
  makeStyles,
  Toolbar,
  Typography,
} from "@material-ui/core"
import NavItemList from "./navItems"

const useStyles = makeStyles((theme) => ({
  root: {},
  appBar: {
    height: "6vh",
    width: "100%",
    justifyContent: "center",
    top: 0,
  },
  flexGrow: {
    flexGrow: 1,
  },
}))

const index = () => {
  const classes = useStyles()

  return (
    <AppBar
      position="sticky"
      classes={{ root: clsx(classes.appBar, classes.flexGrow) }}
    >
      <Toolbar>
        <Typography className={classes.flexGrow} variant="h5">
          <Link href="/">
            <a>CoWin2.0</a>
          </Link>
        </Typography>
        {NavItemList.map((item, index) => (
          <Button color="inherit" variant="text" key={index}>
            <Link href={item.href}>
              <a>{item.label}</a>
            </Link>
          </Button>
        ))}
      </Toolbar>
    </AppBar>
  )
}

export default index
