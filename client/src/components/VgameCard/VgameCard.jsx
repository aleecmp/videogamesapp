import React from "react";
import { Link } from "react-router-dom";
import styles from "./VgameCard.module.css";

const VgameCard = (props) => {
  console.log(props.name);
  console.log(props.id);
  console.log(props.rating);

  return (
    <div>
      <Link to={`videogame/${props.id}`}>
        <div>
          <h1>{props.name.toUpperCase()}</h1>
        </div>
        <div>
          <img className={styles.image} src={props.image} alt={props.name} />
        </div>
        <div>
          {props.genres?.map((e) => (
            <h5 key={e}>{e}</h5>
          ))}
        </div>
      </Link>
    </div>
  );
};

export default VgameCard;
