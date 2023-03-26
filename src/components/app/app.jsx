import React from "react";
import { datalist } from "../../data/datalist";
import { Title } from "../title/title";
import  Cards  from "../cards/cards";
import "./app.css";

function App (){
    return (
        <>
            <Title></Title>
            <Cards data={datalist}></Cards>
        </>
        
    )
}
export default App;