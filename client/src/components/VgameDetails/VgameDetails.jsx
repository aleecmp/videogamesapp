import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDetails, cleanDetails } from "../../redux/actions";
import { Link } from "react-router-dom";
import Loading from "../Loading/Loading";
import styles from "./VgameDetails.module.css";

const VgameDetails = (props) => {
  console.log(props);

  const { id } = props.match.params;
  const dispatch = useDispatch();
  const detail = useSelector((state) => state.details);

  useEffect(() => {
    dispatch(getDetails(id));
    return () => dispatch(cleanDetails());
  }, [id, dispatch]);
  console.log(detail);

  return (
    <div className={styles.container}>
      <div className={styles.backgroundDetail}>
        <Link className={styles.link} to="/home">
          <button className={styles.button}>Back</button>
        </Link>
        <div className={styles.details}>
          {detail.id ? (
            <div classsName={styles.card}>
              <div>
                <img
                  className={styles.image}
                  src={detail.image}
                  alt={detail.name}
                />
              </div>
              <div>
                <h1 className={styles.name}>{detail.name}</h1>
              </div>
              <div>
                <h4>Genres: </h4>
                {detail.createdInDb
                  ? detail.genres?.map((el) => el.name).join(", ")
                  : detail.genres?.map((el) => el).join(", ")}
              </div>
              <div>
                <h4>Description:</h4>
                <p className={styles.description}>{detail.description}</p>
              </div>
              <div>
                <h4>Released:</h4>
                {detail.released}
              </div>
              <div>
                <h4>Rating: </h4>
                {detail.rating}
              </div>
              <div>
                <h4>Platforms: </h4>
                {detail.platforms?.map((p) => {
                  return (
                    <h5 className={styles.platforms} key={p}>
                      {p}
                    </h5>
                  );
                })}
              </div>
            </div>
          ) : (
            <div className={styles.loading}>
              <Loading />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default VgameDetails;
