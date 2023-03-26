import React from "react";
import "./card.css"

function Card({card}) {
    const { name, height, mass, hair_color, skin_color, eye_color, birth_year, gender, url } = card;
    return (
        <ul className="item">
            <li className="item__title">{name}</li>
            <li className="item__img"></li>
            <li>Height: { height }</li>
            <li>Mass: { mass }</li>
            <li>Hair: { hair_color }</li>
            <li>Skin: { skin_color }</li>
            <li>Eye: { eye_color }</li>
            <li>Birth: { birth_year }</li>
            <li>Gender: { gender }</li>
            <li className="item__btn" >
                <a className="item__link" href="{ url }" target={"_blank"}>See more</a>
            </li>
        </ul>
    )   
}
export default Card;