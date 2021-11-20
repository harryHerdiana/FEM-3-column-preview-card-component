import "tailwindcss/tailwind.css";
import Head from "next/head";
import { Fragment } from "react";

function MyApp({ Component, pageProps }) {
  return (
    <Fragment>
      <Head>
        <meta name="description" content="Front End Mentor Challenge" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <style>
          @import
          url('https://fonts.googleapis.com/css2?family=Big+Shoulders+Display:wght@700&family=Lexend+Deca&display=swap');
        </style>
      </Head>
      <Component {...pageProps} />
    </Fragment>
  );
}

export default MyApp;
