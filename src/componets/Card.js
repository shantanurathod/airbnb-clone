import React from "react";
// import Star from "../images/Star 1.png"
// import x from "../images"

export default function Card(props)
{
    // console.log(`../images/${props.image}`)
    return(
        <div className="cards">
            <img className="swimmer" src={`images/${props.image}`} alt="photo1"></img>
            <div className="cards--rating">
                <img src="images/Star 1.png" alt="photo1"/>
                <span>{props.rating}</span>
                <span className="gray">({props.rated}) .</span>
                <span className="gray">{props.country}</span>
            </div>
            <p>{props.title}</p>
            <p><b>From ${props.price}</b> / person</p>
        </div>
    )
}