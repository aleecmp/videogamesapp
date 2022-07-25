import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getGenres, postVgame } from "../../redux/actions";
import styles from "./CreateVgame.module.css";

const validate = (input) => {
  let errors = {};
  if (!input.name.trim()) {
    errors.name = "Name cannot be empty";
  } else if (!input.description.trim()) {
    errors.description = "Description cannot be empty";
  } else if (input.platforms.length < 1) {
    errors.platforms = "Platforms cannot be empty";
  } else if (input.rating < 1 || input.rating > 5) {
    errors.rating = "Rating must be a number between 1 and 5";
  }
  return errors;
};

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
    setErrors(
      validate({
        ...input,
        [e.target.name]: e.target.value,
      })
    );
  };

  const handleSelect = (e) => {
    if (!input.genres.includes(e.target.value)) {
      setInput({
        ...input,
        genres: [...input.genres, e.target.value],
      });
    }
    console.log(input);
  };

  const handleSelectPlat = (e) => {
    if (!input.platforms.includes(e.target.value)) {
      setInput({
        ...input,
        platforms: [...input.platforms, e.target.value],
      });
    }
    setErrors(
      validate({
        ...input,
        platforms: [...input.platforms, e.target.value],
      })
    );
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
    setErrors(
      validate({
        ...input,
        [e.target.name]: e.target.value,
      })
    );
    if (Object.keys(errors).length === 0) {
      dispatch(postVgame(input));
      alert("Videogame created successfully");
      setInput({
        name: "",
        description: "",
        image: "",
        released: "",
        rating: "",
        genres: [],
        platforms: [],
      });
      history.push("/home");
    } else {
      alert("Videogame cannot be created");
    }
  };

  useEffect(() => {
    dispatch(getGenres());
  }, [dispatch]);

  return (
    <div className={styles.container}>
      <nav>
        <Link to="/home">
          <button className={styles.button}>Back</button>
        </Link>
        <h3>Create Vgame</h3>
        <p>Fields with * are required</p>
      </nav>
      <div>
        <form
          onSubmit={(e) => {
            handleSubmit(e);
          }}
        >
          <div>
            <label>Name:* </label>
            <input
              type="text"
              value={input.name}
              name="name"
              placeholder="Name..."
              onChange={(e) => {
                handleChange(e);
              }}
            />
            {errors.name && <p>{errors.name}</p>}
          </div>
          <div>
            <label>Description:* </label>
            <input
              type="text"
              value={input.description}
              name="description"
              placeholder="Description..."
              onChange={(e) => {
                handleChange(e);
              }}
            />
            {errors.description && <p>{errors.description}</p>}
          </div>
          <div>
            <label>Released: </label>
            <input
              type="date"
              value={input.released}
              name="released"
              onChange={(e) => {
                handleChange(e);
              }}
            />
          </div>
          <div>
            <label>Rating: </label>
            <input
              type="number"
              value={input.rating}
              name="rating"
              placeholder="0-5"
              defaultValue={1}
              onChange={(e) => {
                handleChange(e);
              }}
            />

            {errors.rating && <p>{errors.rating}</p>}
          </div>
          <div>
            <label>Image: </label>
            <input
              type="text"
              value={input.image}
              name="image"
              placeholder="insert Url ..."
              onChange={(e) => {
                handleChange(e);
              }}
            />
          </div>
          <div>
            <label>Genres: </label>
            <select
              onChange={(e) => {
                handleSelect(e);
              }}
            >
              <option> select </option>
              {genres.map((e, i) => {
                return (
                  <option key={i} name={e.name} value={e.name}>
                    {e.name}
                  </option>
                );
              })}
            </select>
          </div>
          <div>
            <label>Platforms:* </label>
            <select
              onChange={(e) => {
                handleSelectPlat(e);
              }}
            >
              <option>select</option>
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
            {errors.name ||
            input.platforms.length === 0 ||
            errors.description ? (
              <button className={styles.button} disabled>
                Create
              </button>
            ) : (
              <button className={styles.button}>Create</button>
            )}
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
