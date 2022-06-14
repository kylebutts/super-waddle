import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/katex@0.15.0/dist/katex.min.css"
          crossOrigin="anonymous"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:ital,wght@0,100;0,300;0,700;0,800;1,300&family=Permanent+Marker&display=swap" rel="stylesheet" /> 
      </Head>
      <body className="transition-all duration-300">
        <script>0</script>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
