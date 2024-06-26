import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="es-MX">
      <Head />
      <body className='bg-background text-foreground min-h-screen relative'>
        <Main />
        <NextScript />
        <footer className="flex self-center items-center justify-center h-30 static pt-5 mt-5 w-full bottom-0">
          <p>
          {new Date().getFullYear()} - UTIM &copy;
          </p>
        </footer>
      </body>
    </Html>
  )
}
