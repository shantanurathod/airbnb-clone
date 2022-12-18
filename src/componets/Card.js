import React from "react";
import Star from "../images/Star 1.png"

export default function Card(props)
{
    return(
        <div className="cards">
            <img className="swimmer" src={props.image}/>
            <div className="cards--rating">
                <img src={Star}/>
                <span>{props.rating}</span>
                <span className="gray">({props.rated}) .</span>
                <span className="gray">{props.country}</span>
            </div>
            <p>{props.title}</p>
            <p><b>From ${props.price}</b> / person</p>
        </div>
    )
}