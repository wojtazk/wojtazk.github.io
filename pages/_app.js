import '../styles/globals.css';
import Head from 'next/head';

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Wojciech Kowal</title>
        <meta name="description" content="Wojciech Kowal's Business Card" />
        <meta name="author" content="Wojciech Kowal" />

        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0"
        />

        {/* theme color */}
        <meta
          name="theme-color"
          content="rgb(1, 6, 12)"
          media="(prefers-color-scheme: light)"
        />
        <meta
          name="theme-color"
          content="rgb(1, 6, 12)"
          media="(prefers-color-scheme: dark)"
        />

        {/* favicons */}
        {/* generated with https://realfavicongenerator.net/  ❤️ */}
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="images/favicon/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="images/favicon/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="images/favicon/favicon-16x16.png"
        />
        <link rel="manifest" href="images/favicon/site.webmanifest" />
        <link
          rel="mask-icon"
          href="images/favicon/safari-pinned-tab.svg"
          color="#5bbad5"
        />
        <meta name="msapplication-TileColor" content="#2b5797" />
        {/* <meta name="theme-color" content="#ffffff" /> */}
      </Head>

      <Component {...pageProps} />
      <div className="overlay" aria-hidden="true"></div>
    </>
  );
}
