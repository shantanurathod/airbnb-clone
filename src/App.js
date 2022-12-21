import React from "react"
import Navbar from "./componets/Navbar"
import Hero from "./componets/Hero"
import Card from "./componets/Card"
import cardData from "./cardData.js";


export default function App()
{
    const cardElement = cardData.map(card => {
        return <Card item = {card}/>
    })
    return (
        <div>
        <Navbar />
        <Hero/>
        <section className="card-array">
        {cardElement}
        </section>
 
        </div>
    )
}