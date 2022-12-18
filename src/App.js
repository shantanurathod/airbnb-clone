import React from "react"
import Navbar from "./componets/Navbar"
import Hero from "./componets/Hero"
import Card from "./componets/Card"
import photo1 from "./images/image-12.png"

export default function App()
{
    return (
        <div>
        <Navbar />
        <Hero/>
        <Card
            image = {photo1}
            rating = "5"
            rated = "6"
            country = "USA"
            title = "Life lessons with Katie Zaferes"
            price = "136"
            />
        </div>
    )
}