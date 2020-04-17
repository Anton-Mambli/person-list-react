import React from "react";
import { connect } from "react-redux";
import {
  setSortName,
  setSortId,
  setSortAge,
  setSortAsc,
  setSortDesc,
} from "./../redux/action";

const Sort = ({
  persons,
  mainSort,
  ascSort,
  setSortName,
  setSortId,
  setSortAge,
  setSortAsc,
  setSortDesc,
  title,
  sort,
}) => {
  const newPersons = persons.concat();
  return (
    <div className="sort-block">
      <h3>{title}</h3>
      <div className="sort-block__bio">
        <div
          className={`sort-block__item ${mainSort === "ID" ? "active" : null}`}
          onClick={() => {
            setSortId(newPersons.sort((a, b) => (a.id > b.id ? 1 : -1)));
          }}
        >
          {sort[0]}
        </div>
        <div
          className={`sort-block__item ${
            mainSort === "name" ? "active" : null
          }`}
          onClick={() => {
            setSortName(newPersons.sort((a, b) => (a.name > b.name ? 1 : -1)));
          }}
        >
          {sort[1]}
        </div>
        <div
          className={`sort-block__item ${mainSort === "age" ? "active" : null}`}
          onClick={() => {
            setSortAge(newPersons.sort((a, b) => (a.age > b.age ? 1 : -1)));
          }}
        >
          {sort[2]}
        </div>
      </div>
      <div className="sort-block__desc">
        <div
          className={`sort-block__item ${ascSort === "ASC" ? "active" : null}`}
          onClick={() => {
            setSortAsc(newPersons.sort((a, b) => (a.id > b.id ? 1 : -1)));
          }}
        >
          {sort[3]}
        </div>
        <div
          className={`sort-block__item ${ascSort === "DESC" ? "active" : null}`}
          onClick={() => {
            setSortDesc(newPersons.sort((a, b) => (a.id < b.id ? 1 : -1)));
          }}
        >
          {sort[4]}
        </div>
      </div>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    persons: state.persons,
    mainSort: state.mainSort,
    ascSort: state.ascSort,
  };
};
function mapDispatchToProps(dispatch) {
  return {
    setSortId: (payload) => dispatch(setSortId(payload)),
    setSortName: (payload) => dispatch(setSortName(payload)),
    setSortAge: (payload) => dispatch(setSortAge(payload)),
    setSortAsc: (payload) => dispatch(setSortAsc(payload)),
    setSortDesc: (payload) => dispatch(setSortDesc(payload)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Sort);
