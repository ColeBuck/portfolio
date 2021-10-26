import React from "react"
import "./CourseCard.scss"

export default function CourseCard(props) {
    return <div class="course-card"  style={{"backgroundColor": props.color}}>
        <div class="top">
            <header class="title">{props.title}</header>
            <a class={"course " + props.color} href={props.link} target="_">{props.abbrev}</a>
        </div>
        <hr/>
        <p class="description">{props.description}</p>
    </div>
}