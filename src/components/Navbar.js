import React from "react"
import './Navbar.scss';
import cole from "../../static/images/cole.jpg"

export default function Navbar(props) {
    return <div class="navbar">
        <ul>
            <li><a id="name" href="/">Cole Buck</a></li>
            <li><a href="/projects" class={(props.active === "projects" ? "active" : "")}>Projects</a></li>
            <li><a href="/coursework" class={(props.active === "coursework" ? "active" : "")}>Coursework</a></li>
            <li><a>Résumé</a></li>
            <img src={cole} width="225px" alt="Cole"/>
        </ul>
    </div>
}