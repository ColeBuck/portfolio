import React from "react"
import Navbar from "../components/Navbar"
import ProjectCard from "../components/ProjectCard"
import Footer from "../components/Footer"
import "../components/Base.scss"

const projects = [
  {
    title:"Cash Clicker",
    description:"A simple web game made for my Web Systems Programming class. Users can create an account and increase their score by clicking or tapping 'The Button.' Cash Clicker also features a live leaderboard and user profiles, allowing players to see how they stack up with each other! ",
    link:"https://github.com/cse264/final-project-cole-js"
  },
  {
    title:"Portfolio Site", 
    description:"Yes, the portfolio site that you're looking at right now! This project had two main purposes: to help me learn Gatsby.js, and to efficiently show off other projects that I've worked on. ", 
    link:"https://github.com/ColeBuck/portfolio"
  },
  {
    title:"Java Football", 
    description:"When I started learning Java way back in high school, the first thing I wanted to make was a football simulator game, similar to the Madden video games. Of course, this turned out to be quite a challenge, and I didn't make it very far at all. Since then, I've revisited the idea multiple times, and have produced a small, but functional, fraction of my original vision!",
    link:"https://github.com/ColeBuck/javafootball"
  }
]

export default function Projects() {
  return <div>
    <Navbar active="projects"/>
    <div class="projects">
      {projects.map((item, index) => {
          const colors = ['dodgerblue', 'black'];
          return <ProjectCard color={colors[index % colors.length]} title={item.title} description={item.description} link={item.link}></ProjectCard>  
      })}
    </div>
    <Footer/>
  </div>
}
