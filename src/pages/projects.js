import React from "react"
import Helmet from "react-helmet"
import Navbar from "../components/Navbar"
import ProjectCard from "../components/ProjectCard"
import "../components/Base.scss"
import projects from "../../static/data/projects.json"

export default function Projects() {
  return <div>
    <Helmet>
      <title>Cole Buck | Projects</title>
    </Helmet>
    <Navbar active="projects"/>
    <div class="content-container">
        {projects.map((item) => {
          return <ProjectCard project={item}></ProjectCard>  
        })}
    </div>
  </div>
}