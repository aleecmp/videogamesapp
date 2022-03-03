import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDetails, cleanDetails } from "../../redux/actions";
import { Link } from "react-router-dom";
import Loading from "../Loading/Loading";

const VgameDetails = (props) => {
  console.log(props);

  const { id } = props.match.params;
  const dispatch = useDispatch();
  const vgame = useSelector((state) => state.details);

  useEffect(() => {
    dispatch(getDetails(id));
    return () => dispatch(cleanDetails());
  }, [id, dispatch]);
  console.log(vgame);

  return (
    <div>
      <Link to="/home">
        <button>Back</button>
      </Link>
      {vgame.id ? (
        <div>
          <div>
            <img src={vgame.image} alt={vgame.name} />
          </div>
          <div>
            <h1>{vgame.name}</h1>
          </div>
          <div>
            <h5>Genres:</h5>
            {vgame.genres?.map((e) => (
              <h5 key={e}>{e}</h5>
            ))}
          </div>
          <div>
            <h2>Description:</h2>
            <p>{vgame.description_raw}</p>
          </div>
          <div>
            <h5>Released:</h5>
            {vgame.released}
          </div>
          <div>
            <h5>Rating: </h5>
            {vgame.rating}
          </div>
          <div>
            <h5>Platforms:</h5>
            {vgame.platforms?.map((e) => (
              <h5 key={e}>{e}</h5>
            ))}
          </div>
        </div>
      ) : (
        <Loading />
      )}
    </div>
  );
};

export default VgameDetails;
