import Document, { Html, Head, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="es">
        <Head>
          {/*  reCAPTCHA v3 para Firebase App Check */}
          {/* <script
            src="https://www.google.com/recaptcha/api.js?render=6LeBz2ErAAAAACyKkaXUCSF91kqaqCTRaOtxyx_V"
            async
            defer
          /> */}
        </Head>
        <body className="bg-black text-white">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
