import React from "react"
import Helmet from "react-helmet"
import Navbar from "../components/Navbar"
import AboutMe from "../components/AboutMe"
import Footer from "../components/Footer"
import "../components/Base.scss"

export default function Home() {
  return <div>
    <Helmet>
      <title>Cole Buck | Home</title>
    </Helmet>
    <Navbar/>
    <AboutMe/>
    <Footer/>
  </div>
}
