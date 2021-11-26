import React from "react"
import './Navbar.scss';
import cole from "../../static/images/cole.jpg"
import resume from "../../static/resume_public.pdf"

export default function Navbar(props) {
    return <div class="navbar">
        <h1 id="name"><a href="/">Cole Buck</a></h1>
        <a href="/"><img id="cole" src={cole} alt="Cole"/></a>
        <a href="/projects" class={(props.active === "projects" ? "navbar-link active" : "navbar-link")}>Projects</a>
        <a href="/coursework" class={(props.active === "coursework" ? "navbar-link active" : "navbar-link")}>Coursework</a>
        <a href={resume} target="_blank" rel="noreferrer" class="navbar-link">Résumé</a>
        <a href="https://docs.google.com/forms/d/e/1FAIpQLSfesrWAFU_OMUl2tlh65pvKWn7QXJT6o1BJhL4muyJIolcpLQ/viewform?usp=sf_link" target="_blank" rel="noreferrer" class="navbar-link">Contact</a>
    </div>
}