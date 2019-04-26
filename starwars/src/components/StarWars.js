import React from 'react';
import './StarWars.css';

const StarWars = props => {
  return (
    <div className="character">
      <ul>
        <li><h1>{props.char.name}</h1></li>
        <li>Birth Year: {props.char.birth_year}</li>
        <li>Eye Color: {props.char.eye_color}</li>
        <li>Height: {props.char.height}</li>
        <li>Home World: <img src={props.char.homeworld} alt="world"></img></li>
        <li>Mass: {props.char.mass}</li>
      </ul>
    </div>
  );
}

export default StarWars;