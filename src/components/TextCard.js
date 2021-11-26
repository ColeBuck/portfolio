import React from "react"
import './TextCard.scss';

export default function TextCard(props) {
    return <div class="text-card">
        <p>{props.text}</p>
    </div>
}