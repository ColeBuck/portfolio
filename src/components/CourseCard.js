import React from "react"
import './CourseCard.scss';

export default function CourseCard(props) {
    return <div class="course-card">
        <h1 class="course-title">{props.course.title}</h1> 
        <p class="course-description">{props.course.description}</p>
        <h1 class="section-title">Link</h1>
        <div class="links-container">
            <a href={props.course.link} target="_blank" rel="noreferrer">{props.course.abbrev}</a>
        </div>
    </div>
}