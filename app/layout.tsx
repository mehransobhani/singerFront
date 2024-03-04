import "./globals.css";
import {NextFont} from "next/dist/compiled/@next/font";
import localFont from "next/font/local";

const myFont: NextFont = localFont({ src: '../public/font/Vazirmatn-Regular.woff2' })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fa">
      <body className={[myFont.className , "min-h-screen"].join(" ")}>{children}</body>
    </html>
  )
}
