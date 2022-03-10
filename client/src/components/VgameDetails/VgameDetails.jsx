import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDetails, cleanDetails } from "../../redux/actions";
import { Link } from "react-router-dom";
import Loading from "../Loading/Loading";

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
    <div>
      <Link to="/home">
        <button>Back</button>
      </Link>
      {detail.id ? (
        <div>
          <div>
            <img src={detail.image} alt={detail.name} />
          </div>
          <div>
            <h1>{detail.name}</h1>
          </div>
          <div>
            <h5>Genres: </h5>
            {detail.createdInDb
              ? detail.genres?.map((el) => el.name).join(", ")
              : detail.genres?.map((el) => el).join(", ")}
          </div>
          <div>
            <h2>Description:</h2>
            <p>{detail.description}</p>
          </div>
          <div>
            <h5>Released:</h5>
            {detail.released}
          </div>
          <div>
            <h5>Rating: </h5>
            {detail.rating}
          </div>
          <div>
            <h3>Platforms: </h3>
            {detail.platforms?.map((p) => {
              return <h3 key={p}>{p}</h3>;
            })}
          </div>
        </div>
      ) : (
        <Loading />
      )}
    </div>
  );
};

export default VgameDetails;
