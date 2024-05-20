import { Inter } from "next/font/google";
import "./globals.css";
import localFont from 'next/font/local'
 
// Font files can be colocated inside of `pages`
const myFont = localFont({ src: './font/Qs_Iranyekan light.ttf' })
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html  lang="en">
      <body className={myFont.className}>{children}</body>
    </html>
  );
}
