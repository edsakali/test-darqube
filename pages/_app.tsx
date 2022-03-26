import type { AppProps } from 'next/app'
import {GlobalStyle} from "../assets/styles/globalStyles";

function MyApp({ Component, pageProps }: AppProps) {
  return <><GlobalStyle/><Component {...pageProps} /> </>
}

export default MyApp
