import React from "react"
import Helmet from "react-helmet"
import Navbar from "../components/Navbar"
import CourseCard from "../components/CourseCard"
import "../components/Base.scss"
import courses from "../../static/data/courses.json"

export default function Coursework() {
  return <div>
    <Helmet>
      <title>Cole Buck | Coursework</title>
    </Helmet>
    <Navbar active="coursework"/>
    <div class="content-container">
      {courses.map((item) => {
        return <CourseCard course={item}></CourseCard>  
      })}
    </div>
  </div>
}