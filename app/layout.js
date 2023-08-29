import { Toaster } from "react-hot-toast";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import "./globals.css";
import { Poppins, Nunito } from "next/font/google";
export const poppins = Poppins({
  weight: "400",
  styles: ["400", "700"],
  subsets: ["latin"],
});
export const nunito = Nunito({
  weight: "700",
  styles: ["400", "700", "800", "900"],
  subsets: ["latin"],
});

const metadata = {
  title: "Portfolio",
  description: "A portfolio of my work",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={`${poppins.className}`}>
        <Header />
        {children}
        <Toaster position="bottom-left" />
        <Footer />
      </body>
    </html>
  );
}
