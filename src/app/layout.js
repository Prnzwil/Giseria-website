
import "bootstrap/dist/css/bootstrap.min.css";
// import { ThemeProvider } from "@/components/context/themeContext";
import './globals.css'
// import { Inter } from 'next/font/google'

// const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Giseria',
  description: "Giseria's online space",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ backgroundColor: "black" }}>
        {children}
      </body>
    </html>
  )
}
