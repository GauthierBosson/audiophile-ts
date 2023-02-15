import type { AppProps } from 'next/app'
import { Manrope } from '@next/font/google'

import '@/styles/globals.css'

const manrope = Manrope({ subsets: ['latin'] })

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <style jsx global>
        {`
          :root {
            --manrope-font: ${manrope.style.fontFamily};
          }
        `}
      </style>
      <Component {...pageProps} />
    </>
  )
}
