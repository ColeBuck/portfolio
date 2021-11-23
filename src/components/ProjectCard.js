import React from "react"
import "./ProjectCard.scss"

export default function ProjectCard(props) {
    return <div class="project-card"  style={{"backgroundColor": props.color}}>
        <div class="top">
            <header class="title">{props.project.title}</header>
            <a class={"code " + props.color} href={props.project.link} target="_">View GitHub</a>
        </div>
        <hr/>
        <p class="description">{props.project.description}</p>
        <hr/>
        <header class="section">Technology Used</header>
        {props.project.tech.map((item) => {
            return <p class="tech">- {item}</p>
        })}
    </div>
}