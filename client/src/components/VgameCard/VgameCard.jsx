import React from "react";
import { Link } from "react-router-dom";
import styles from "./VgameCard.module.css";

const VgameCard = ({ name, image, genres, id, rating }) => {
  if (typeof genres[0] !== "string") {
    genres = genres.map((g) => g.name);
  }

  return (
    <div>
      <Link to={`videogame/${id}`}>
        <div>
          <h1>{name.toUpperCase()}</h1>
        </div>
        <div>
          <img className={styles.image} src={image} alt={name} />
        </div>
        <div>
          {genres?.map((e) => {
            return <h4 key={e}>{e}</h4>;
          })}
        </div>
      </Link>
    </div>
  );
};

export default VgameCard;
