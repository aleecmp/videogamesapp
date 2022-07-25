import React from "react";
import { Link } from "react-router-dom";
import styles from "./VgameCard.module.css";

const VgameCard = ({ name, image, genres, id, rating }) => {
  if (typeof genres[0] !== "string") {
    genres = genres.map((g) => g.name);
  }

  return (
    <div className={styles.container}>
      <Link className={styles.link} to={`videogame/${id}`}>
        <div>
          <h1 className={styles.name}>{name.toUpperCase()}</h1>
        </div>
        <div>
          <img className={styles.image} src={image} alt={name} />
        </div>
        <div className={styles.genres}>
          {genres?.map((e) => {
            return (
              <h4 className={styles.subgenres} key={e}>
                {e}
              </h4>
            );
          })}
        </div>
      </Link>
    </div>
  );
};

export default VgameCard;
