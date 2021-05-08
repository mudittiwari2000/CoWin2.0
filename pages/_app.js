import "app/styles/globals.css"
import store from "app/redux/store"
import { Provider } from "react-redux"
import ThemeLayout from "app/layouts/ThemeLayout"
import MainLayout from "app/layouts/MainLayout"

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <ThemeLayout>
        <MainLayout>
          <Component {...pageProps} />
        </MainLayout>
      </ThemeLayout>
    </Provider>
  )
}

export default MyApp
