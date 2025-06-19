import Document, { Html, Head, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="es">
        <Head>
          {/* reCAPTCHA Enterprise script */}
          <script
            src={`https://www.google.com/recaptcha/enterprise.js?render=${process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}`}
            async
            defer
          />
        </Head>
        <body className="bg-black text-white">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}