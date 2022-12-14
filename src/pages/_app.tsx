import '../styles/globals.css'
import "primereact/resources/themes/tailwind-light/theme.css"
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';

import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp
