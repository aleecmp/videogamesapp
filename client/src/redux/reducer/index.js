import {
  GET_ALL_VGAMES,
  GET_VGAME_BY_NAME,
  GET_DETAILS,
  GET_GENRES,
  CLEAN_DETAILS,
  CLEAN_VGAMES,
  FILTER_VGAME_BY_GENRE,
  FILTER_BY_ORIGIN,
  ORDER_BY_NAME,
  ORDER_BY_RATING,
  POST_VGAME,
} from "../actions";

const initialState = {
  vgames: [],
  allVgames: [],
  details: [],
  genres: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_VGAMES:
      return {
        ...state,
        vgames: action.payload,
        allVgames: action.payload,
      };
    case GET_VGAME_BY_NAME:
      return {
        ...state,
        vgames: action.payload,
      };
    case GET_DETAILS:
      return {
        ...state,
        details: action.payload,
      };
    case GET_GENRES:
      return {
        ...state,
        genres: action.payload,
      };
    case CLEAN_DETAILS:
      return {
        ...state,
        details: action.payload,
      };
    case CLEAN_VGAMES:
      return {
        ...state,
        allVgames: action.payload,
      };

    case FILTER_VGAME_BY_GENRE:
      const allVgames2 = state.allVgames;
      const genres2 = allVgames2.filter(
        (c) =>
          c.genres?.find((c) => c === action.payload) ||
          c.Genres?.find((c) => c.name === action.payload)
      );
      const statusFiltered = action.payload === "All" ? allVgames2 : genres2;
      return {
        ...state,
        vgames: statusFiltered,
      };

    case FILTER_BY_ORIGIN:
      const vgamesFiltered =
        action.payload === "Created"
          ? state.allVgames.filter((e) => e.createdInDb)
          : state.allVgames.filter((e) => !e.createdInDb);
      return {
        ...state,
        vgames: action.payload === "All" ? state.allVgames : vgamesFiltered,
      };

    case ORDER_BY_NAME:
      let orderedVideogames = state.vgames.sort((a, b) => {
        if (a.name < b.name) return action.payload === "Asc" ? -1 : 1;

        if (a.name > b.name) return action.payload === "Asc" ? 1 : -1;
        return 0;
      });
      return {
        ...state,
        vgames: [...orderedVideogames],
      };

    case ORDER_BY_RATING:
      let orderedRating = state.vgames.sort((a, b) => {
        if (a.rating < b.rating) return action.payload === "Asc" ? -1 : 1;

        if (a.rating > b.rating) return action.payload === "Asc" ? 1 : -1;
        return 0;
      });
      return {
        ...state,
        vgames: [...orderedRating],
      };

    case POST_VGAME:
      return {
        ...state,
      };
    default:
      return state;
  }
};

export default rootReducer;
