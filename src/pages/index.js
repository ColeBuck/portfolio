import React from "react"
import Helmet from "react-helmet"
import Navbar from "../components/Navbar"
import TextCard from "../components/TextCard"
import "../components/Base.scss"
import "../components/MobileView.scss"
import homeText from "../../static/data/homeText.json"

export default function Home() {
  return <div>
    <Helmet>
      <title>Cole Buck | Home</title>
    </Helmet>
    <Navbar/>
    <div class="content-container">
      {homeText.map((item) => {
          return <TextCard text={item}/>  
      })}
    </div>
  </div>
}
