import axios from "axios";

export const GET_ALL_VGAMES = "GET_ALL_VGAMES";
export const GET_VGAME_BY_NAME = "GET_VGAME_BY_NAME";
export const GET_DETAILS = "GET_DETAILS";
export const CLEAN_DETAILS = "CLEAN_DETAILS";
export const CLEAN_VGAMES = "CLEAN_VGAMES";
export const GET_GENRES = "GET_GENRES";
export const POST_VGAME = "POST_VGAME";
export const FILTER_VGAME_BY_GENRE = "FILTER_VGAME_BY_GENRE";
export const FILTER_BY_ORIGIN = "FILTER_BY_ORIGIN";
export const ORDER_BY_NAME = "ORDER_BY_NAME";
export const ORDER_BY_RATING = "ORDER_BY_RATING";

export const getAllVgames = () => {
  return async (dispatch) => {
    try {
      const res = await axios.get("http://localhost:3001/videogames");
      dispatch({
        type: GET_ALL_VGAMES,
        payload: res.data,
      });
    } catch (err) {
      console.log(err);
    }
  };
};

export const getVgameByName = (name) => {
  return async (dispatch) => {
    try {
      const res = await axios.get(
        `http://localhost:3001/videogames?name=${name}`
      );
      dispatch({
        type: GET_VGAME_BY_NAME,
        payload: res.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const getDetails = (id) => {
  return async (dispatch) => {
    try {
      const res = await axios.get(`http://localhost:3001/videogames/${id}`);
      dispatch({
        type: GET_DETAILS,
        payload: res.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const cleanDetails = () => {
  return {
    type: CLEAN_DETAILS,
    payload: [],
  };
};

export const cleanVgames = () => {
  return {
    type: CLEAN_VGAMES,
    payload: [],
  };
};

export const getGenres = () => {
  return async (dispatch) => {
    try {
      const res = await axios.get("http://localhost:3001/genres");
      dispatch({
        type: GET_GENRES,
        payload: res.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const filterVgamesByGenre = (payload) => {
  return {
    type: FILTER_VGAME_BY_GENRE,
    payload,
  };
};

export const filterByOrigin = (payload) => {
  return {
    type: FILTER_BY_ORIGIN,
    payload,
  };
};

export const orderByName = (payload) => {
  return {
    type: ORDER_BY_NAME,
    payload,
  };
};

export const orderByRating = (payload) => {
  return {
    type: ORDER_BY_RATING,
    payload,
  };
};

export const postVgame = (payload) => {
  return async (dispatch) => {
    try {
      const res = await axios.post("http://localhost:3001/videogames", payload);
      return {
        type: POST_VGAME,
        res,
      };
    } catch (error) {
      console.log(error);
    }
  };
};
