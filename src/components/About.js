import React from "react"
import author from "../me.png"

export const About = () => {
    return ( <
        div className = "container py-5" >
        <
        div className = "row" >
        <
        div className = "col-lg-6 col-xm-12" >
        <
        div className = "photo-wrap mb-5" >
        <
        img className = "profile-img"
        src = { author }
        alt = "author.." / >
        <
        /div> <
        /div> <
        div className = "col-lg-6 col-xm-12" >
        <
        h1 className = "aboutme-heading" > About Me < /h1> <
        p > This is my story.. < /p> <
        /div> <
        /div> <
        /div>
    )
}
export default About