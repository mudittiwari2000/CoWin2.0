import { Box, Button, Paper } from "@material-ui/core"
import Head from "next/head"

// Redux
import { useDispatch } from "react-redux"
import { toggleTheme } from "app/redux/slices/themeSlice"

export default function Home() {
  const dispatch = useDispatch()

  const handleToggleTheme = () => {
    dispatch(toggleTheme())
  }

  return (
    <div>
      <Head>
        <title>CoWin 2.0</title>
        <meta name="description" content="Covid Vaccine Informer" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          style={{ minHeight: "100vh" }}
        >
          <Paper
            elevation={2}
            style={{ maxWidth: 300, padding: 20, marginBottom: 10 }}
          >
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Praesentium asperiores culpa, quis ipsam, eos nostrum eius nulla
            ratione enim id possimus labore dicta blanditiis quas placeat,
            consequatur deleniti excepturi odio provident eaque et omnis? Vitae,
            neque laudantium? Sapiente accusantium, neque nulla itaque et atque
            iure numquam laudantium, eius, labore dolorem.
          </Paper>
          <Button
            variant="contained"
            size="large"
            color="secondary"
            onClick={handleToggleTheme}
          >
            Toggle Theme
          </Button>
        </Box>
      </main>
    </div>
  )
}
