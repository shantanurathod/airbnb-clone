import React from "react";

export default function Card(props)
{
    return(
        <div className="cards">
            <img className="swimmer" src={`images/${props.item.image}`} alt="photo1"></img>
            <div className="cards--rating">
                <img src="images/Star 1.png" alt="photo1"/>
                <span>{props.item.rating}</span>
                <span className="gray">({props.item.rated}) .</span>
                <span className="gray">{props.item.country}</span>
            </div>
            <p>{props.item.title}</p>
            <p><b>From ${props.item.price}</b> / person</p>
        </div>
    )
}