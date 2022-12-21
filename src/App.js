import React from "react"
import Navbar from "./componets/Navbar"
import Hero from "./componets/Hero"
import Card from "./componets/Card"


export default function App()
{
    return (
        <div>
        <Navbar />
        <Hero/>
        <section className="card-array">
        <Card
            image = "image-12.png"
            rating = "5"
            rated = "6"
            country = "USA"
            title = "Life lessons with Katie Zaferes"
            price = "136"
            />
        <Card
            image = "wedding-photography 1.png"
            rating = "5"
            rated = "30"
            country = "USA"
            title = "Learn wedding photography"
            price = "125"
            />
        <Card
            image = "mountain-bike 1.png"
            rating = "4.8"
            rated = "2"
            country = "USA"
            title = "Group Mountain Biking"
            price = "50"
            />
        </section>
 
        </div>
    )
}