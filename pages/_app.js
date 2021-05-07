import "../styles/globals.css"
import store from "redux/store"
import { Provider } from "react-redux"
import ThemeLayout from "layouts/ThemeLayout"

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <ThemeLayout>
        <Component {...pageProps} />
      </ThemeLayout>
    </Provider>
  )
}

export default MyApp
