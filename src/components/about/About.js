import React from 'react'
import "./About.css"
import AboutImg from "../../media/AboutImg.jpg"

export const About = () => {
    return (
        <div className="about-container" >
            <div className="about-desc">
                <h3>Let me tell you something about me</h3>
                <p>Ex deserunt sit excepteur labore fugiat incididunt quis officia eiusmod minim elit ipsum ut. Dolore fugiat tempor nulla cupidatat enim id Lorem ut. Enim irure adipisicing dolor commodo eu cupidatat cupidatat in labore aliquip voluptate eiusmod laborum minim.</p>
            </div>
            <div className="about-img">
                <img src={ AboutImg } alt="" />
            </div>
        </div>
    )
}
