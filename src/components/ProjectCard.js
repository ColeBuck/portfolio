import React from "react"
import './ProjectCard.scss';

export default function ProjectCard(props) {
    return <div class="project-card">
        <h1 class="project-title">{props.project.title}</h1>
        <p class="project-description">{props.project.description}</p>
        <h1 class="section-title">Technology Used</h1>
        {props.project.tech.map((item) => {
          return <p class="tech-item">&bull; {item}</p>
        })}
        <h1 class="section-title">Links</h1>
        <div class="links-container">
            {props.project.link ? <a href={props.project.link} target="_blank" rel="noreferrer">Live App</a> : null}
            <a href={props.project.github} target="_blank" rel="noreferrer">GitHub</a>
        </div>
    </div>
}