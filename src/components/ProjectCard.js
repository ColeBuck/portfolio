import React from "react"
import "./ProjectCard.scss"

export default function ProjectCard(props) {
    return <div class="project-card"  style={{"backgroundColor": props.color}}>
        <div class="top">
            <header class="title">{props.title}</header>
            <a class={"code " + props.color} href={props.link} target="_">View GitHub</a>
        </div>
        <hr/>
        <p class="description">{props.description}</p>
    </div>
}