import {
  SEND_PERSON,
  VIEW_TABLE,
  VIEW_PREVIEW,
  SORT_ID,
  SORT_NAME,
  SORT_AGE,
  SORT_ASC,
  SORT_DESC,
  TOGGLE_FAVOURITE,
  TOGGLE_LANG,
  SEARCH,
} from "./types";
export function sendPerson(payload) {
  return {
    type: SEND_PERSON,
    payload: payload,
  };
}
export function setTableView() {
  return { type: VIEW_TABLE };
}
export function setPreviewView() {
  return { type: VIEW_PREVIEW };
}
export function setSortId(payload) {
  return {
    type: SORT_ID,
    payload: payload,
  };
}
export function setSortName(payload) {
  return {
    type: SORT_NAME,
    payload: payload,
  };
}
export function setSortAge(payload) {
  return {
    type: SORT_AGE,
    payload: payload,
  };
}
export function setSortAsc(payload) {
  return {
    type: SORT_ASC,
    payload: payload,
  };
}
export function setSortDesc(payload) {
  return {
    type: SORT_DESC,
    payload: payload,
  };
}
export function toggleFavourite(payload) {
  return {
    type: TOGGLE_FAVOURITE,
    payload: payload,
  };
}
export function toggleLang() {
  return { type: TOGGLE_LANG };
}
export function search(payload) {
  return { type: SEARCH, payload: payload };
}
