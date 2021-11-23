import React from "react"
import Helmet from "react-helmet"
import Navbar from "../components/Navbar"
import ProjectCard from "../components/ProjectCard"
import Footer from "../components/Footer"
import "../components/Base.scss"

const projects = [
  {
    title:"Cash Clicker",
    description:"A simple web game made for my Web Systems Programming class. Users can create an account and increase their score by clicking or tapping 'The Button.' Cash Clicker also features a live leaderboard and user profiles, allowing players to see how they stack up with each other! ",
    link:"https://github.com/cse264/final-project-cole-js",
    tech: ["HTML/Pug, CSS, JavaScript", "Node.js / Express.js", "PostgreSQL"]
  },
  {
    title:"Portfolio Site", 
    description:"Yes, the portfolio site that you're looking at right now! This project had two main purposes: to help me learn Gatsby.js, and to efficiently show off other projects that I've worked on. ", 
    link:"https://github.com/ColeBuck/portfolio",
    tech: ["React", "Gatsby", "CSS/Sass"]
  },
  {
    title:"Java Football", 
    description:"When I started learning Java way back in high school, the first thing I wanted to make was a football simulator game, similar to the Madden video games. Of course, this turned out to be quite a challenge, and I didn't make it very far at all. Since then, I've revisited the idea multiple times, and have produced a small, but functional, fraction of my original vision!",
    link:"https://github.com/ColeBuck/javafootball",
    tech: ["Java", "Spring Boot", "Maven"]
  }
]

export default function Projects() {
  return <div>
    <Helmet>
      <title>Cole Buck | Projects</title>
    </Helmet>
    <Navbar active="projects"/>
    <div class="projects">
      {projects.map((item, index) => {
          const colors = ['dodgerblue', 'black'];
          return <ProjectCard color={colors[index % colors.length]} project={item}></ProjectCard>  
      })}
    </div>
    <Footer/>
  </div>
}
