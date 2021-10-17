import React from "react";

import './card.style.css'

export const Card = (props) => (

    <div className="card-container">
        <img
            alt="Monster"
            src={`https://robohash.org/${props.monster.id}set=set2&size=180*180`} />
        <h2> {props.monster.name} </h2>
        <p> <strong> {props.monster.email}</strong>  </p>
    </div>


);