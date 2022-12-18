import React from "react";
import Airbnb from "../images/airbnb 1.svg"

export default function Navbar()
{
    return(
        <nav>
        <img src={Airbnb} className="nav-logo"></img>
        </nav>
    )
}