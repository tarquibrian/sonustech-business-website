import { AppProvider } from "../contexts/app.context"
import { AnimatePresence } from "framer-motion"

function MyApp({ Component, pageProps }) {
  return (
    <AnimatePresence mode="wait" initial={false}>
      <AppProvider>
        <Component {...pageProps} />
      </AppProvider>
    </AnimatePresence>
  )
}

export default MyApp
