import {
  SEND_PERSON,
  VIEW_PREVIEW,
  VIEW_TABLE,
  SORT_ID,
  SORT_NAME,
  SORT_AGE,
  SORT_ASC,
  SORT_DESC,
  TOGGLE_FAVOURITE,
  TOGGLE_LANG,
  SEARCH,
} from "./types";
const initialState = {
  persons: [],
  view: "preview",
  mainSort: "ID",
  ascSort: "ASC",
  lang: true,
};
export const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case VIEW_PREVIEW:
      return { ...state, view: "preview" };
    case VIEW_TABLE:
      return { ...state, view: "table" };
    case SEND_PERSON:
      return { ...state, persons: state.persons.concat(action.payload) };
    case SORT_ID:
      return { ...state, persons: action.payload, mainSort: "ID" };
    case SORT_NAME:
      return { ...state, persons: action.payload, mainSort: "name" };
    case SORT_AGE:
      return { ...state, persons: action.payload, mainSort: "age" };
    case SORT_ASC:
      return { ...state, persons: action.payload, ascSort: "ASC" };
    case SORT_DESC:
      return { ...state, persons: action.payload, ascSort: "DESC" };
    case TOGGLE_FAVOURITE:
      return { ...state, persons: action.payload };
    case TOGGLE_LANG:
      return { ...state, lang: !state.lang };
    case SEARCH:
      return { ...state, persons: action.payload };
    default:
      return state;
  }
};
