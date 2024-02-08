import Header from "../component/partials/Header";
import Head from "next/head";

import '../styles/global.css'

function MyApp({ Component, pageProps }) {

  return (
      <div>
          <Head>
              <title>Berat Aras</title>
          </Head>
        <Component {...pageProps} />
      </div>
  )
}

export default MyApp
