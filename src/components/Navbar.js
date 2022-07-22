import React from "react"
import pic from "../images/pic.png"
import "../index.css"

export default function Navbar() {
    return(
       <nav className="navg">
        <img src={pic} className="pic1" />
        <h3 className="lefthead">ReactFacts</h3>
        <h4 className="righthead">React Course - Project 1</h4>
       </nav>
    )
}