import "@/styles/globals.css";
import type { AppProps } from "next/app";
import localFont from "next/font/local";

const sharpGrotesk = localFont({
  src: "/fonts/Sharp_Grotesk/SharpGrotesk-light20.otf",
  variable: "--font-sharpGrotesk",
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={`${sharpGrotesk.variable} font-sans`}>
      <Component {...pageProps} />
    </main>
  );
}
