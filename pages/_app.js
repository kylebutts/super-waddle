import '../styles/globals.css'
import '../components/Code/Pre.css'
import '../styles/prism-rose-pine.css'
import { ThemeProvider } from 'next-themes'

function MyApp({ Component, pageProps }) {
  return <ThemeProvider enableSystem={true} attribute="class">
    <Component {...pageProps} />
  </ThemeProvider>
}

export default MyApp
