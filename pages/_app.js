import '../public/assets/css/ionicons.min.css'
import '../public/assets/css/linearicons.css'
import '../public/assets/css/magnific-popup.css'
import '../public/assets/css/owl.carousel.min.css'
import '../public/assets/css/owl.theme.default.min.css'
import '../public/assets/css/bootstrap.min.css'
import '../public/assets/css/style.css'
import '../public/assets/css/responsive.css'
import Header from "../component/partials/header";
import Head from "next/head";
import {Helmet} from "react-helmet";

function MyApp({ Component, pageProps }) {
  return (
      <div>
          <Helmet>
          </Helmet>
          <Head>
              <title>Berat Aras</title>
          </Head>
          <Header />
        <Component {...pageProps} />
      </div>
  )
}

export default MyApp
