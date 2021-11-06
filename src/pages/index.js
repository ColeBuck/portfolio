import React from "react"
import Navbar from "../components/Navbar"
import AboutMe from "../components/AboutMe"
import Footer from "../components/Footer"
import "../components/Base.scss"

export default function Home() {
  return <div>
    <Navbar/>
    <AboutMe/>
    <Footer/>
  </div>
}
