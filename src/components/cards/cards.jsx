import React from "react";
import Card from "./card/card";
import "./cards.css";

const Cards = ({ data: {results} }) => {

    return (
        <div className="cards">
            {Array.isArray(results) ?
                results.map((personage, index) => {
                  return <Card card={personage} key={Math.random()*10+index}></Card>
              }) :null
            }
        </div>
        
    )

}
export default Cards;