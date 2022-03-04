import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getGenres, postVgame } from "../../redux/actions";

const CreateVgame = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { genres } = useSelector((state) => ({
    genres: state.genres,
  }));

  const [errors, setErrors] = useState({});

  const [input, setInput] = useState({
    name: "",
    description: "",
    image: "",
    released: "",
    rating: "",
    genres: [],
    platforms: [],
  });

  const handleChange = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
    console.log(input);
  };

  const handleSelect = (e) => {
    setInput({
      ...input,
      genres: [...input.genres, e.target.value],
    });
  };

  const handleSelectPlat = (e) => {
    setInput({
      ...input,
      platforms: [...input.platforms, e.target.value],
    });
  };

  const handleDeleteGenres = (e) => {
    setInput({
      ...input,
      genres: input.genres.filter((iGenres) => iGenres !== e),
    });
  };

  const handleDeletePlatforms = (e) => {
    setInput({
      ...input,
      platforms: input.platforms.filter((iPlatforms) => iPlatforms !== e),
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(postVgame(input));
    alert("Vgame Created Successfully");
    history.push("/home");
    setInput({
      name: "",
      description: "",
      image: "",
      released: "",
      rating: "",
      genres: [],
      platforms: [],
    });
  };

  useEffect(() => {
    dispatch(getGenres());
  }, [dispatch]);

  return (
    <div>
      <nav>
        <Link to="/home">
          <button>Back</button>
        </Link>
        <h3>Create Vgame</h3>
      </nav>
      <div>
        <form
          onSubmit={(e) => {
            handleSubmit(e);
          }}
        >
          <div>
            <label>Name: </label>
            <input
              type="text"
              value={input.name}
              name="name"
              placeholder="Name..."
              onChange={(e) => {
                handleChange(e);
              }}
            />
          </div>
          <div>
            <label>Description: </label>
            <input
              type="text"
              value={input.description}
              name="description"
              placeholder="Description..."
              onChange={(e) => {
                handleChange(e);
              }}
            />
          </div>
          <div>
            <label>Released: </label>
            <input
              type="text"
              value={input.released}
              name="released"
              placeholder="YYYY-MM-DD"
              onChange={(e) => {
                handleChange(e);
              }}
            />
          </div>
          <div>
            <label>Rating: </label>
            <input
              type="text"
              value={input.rating}
              name="rating"
              placeholder="Rating...1-10"
              onChange={(e) => {
                handleChange(e);
              }}
            />
          </div>
          <div>
            <label>Image: </label>
            <input
              type="text"
              value={input.image}
              name="Image"
              placeholder="http://..."
              onChange={(e) => {
                handleChange(e);
              }}
            ></input>
          </div>
          <div>
            <label>Genres: </label>
            <select
              onChange={(e) => {
                handleSelect(e);
              }}
            >
              <option> select </option>
              {genres?.map((e, i) => {
                return (
                  <option key={i} value={e.name}>
                    {e.name}
                  </option>
                );
              })}
            </select>
            {errors.genres && <p>{errors.genres}</p>}
          </div>
          <div>
            <label>Platforms: </label>
            <select
              onChange={(e) => {
                handleSelectPlat(e);
              }}
            >
              <option> select </option>
              <option value="Android">Android</option>
              <option value="iOS">iOS</option>
              <option value="Linux">Linux</option>
              <option value="macOS">macOS</option>
              <option value="PC">PC</option>
              <option value="Nintendo Switch">Nintendo Switch</option>
              <option value="PlayStation 3">PlayStation 3</option>
              <option value="PlayStation 4">PlayStation 4</option>
              <option value="PlayStation 5">PlayStation 5</option>
              <option value="PS Vita">PS Vita</option>
              <option value="Xbox 360">Xbox 360</option>
              <option value="Xbox One">Xbox One</option>
              <option value="Xbox Series S/X">Xbox Series S/X</option>
            </select>
            {errors.platforms && <p>{errors.platforms}</p>}
          </div>
          <div>
            <button type="submit">Create Now!</button>
          </div>
        </form>
        <div>
          {input.genres?.map((e, i) => (
            <div key={i}>
              <p>{e}</p>
              <button onClick={() => handleDeleteGenres(e)}>X</button>
            </div>
          ))}
        </div>
        <div>
          {input.platforms?.map((e, i) => (
            <div key={i}>
              <p>{e}</p>
              <button onClick={() => handleDeletePlatforms(e)}>X</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CreateVgame;
