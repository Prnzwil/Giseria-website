"use client"
// import Image from 'next/image'
import styles from './page.module.css'
import Navbar from "../components/Navbar"
import Landing from "../components/landing"
import { ThemeProvider } from "../components/context/themeProvider"

export default function Home() {
  return (
    <>
      <ThemeProvider>
        {/* <Navbar /> */}
        <Landing />
      </ThemeProvider>
    </>
  )
}
