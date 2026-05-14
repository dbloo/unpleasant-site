import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Studio Unpleasant",
  description: "For the art deprived.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning className = "scroll-smooth">
      <head>
          <link rel="stylesheet" href="https://use.typekit.net/mzo3its.css"></link>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
            <Navbar />

        {children}

                          <Footer />

      </body>

    </html>
  );
}
