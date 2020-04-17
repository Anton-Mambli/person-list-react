import React from "react";
import { connect } from "react-redux";
import { setPreviewView, setTableView } from "../redux/action";

const View = ({ view, setTableView, setPreviewView, title, params }) => {
  return (
    <div className="view-block">
      <h3>{title}</h3>
      <div className="view-block__desc">
        <div
          className={`view-block__item ${view === "table" ? "active" : null}`}
          onClick={setTableView}
        >
          {params[0]}
        </div>
        <div
          className={`view-block__item ${view === "preview" ? "active" : null}`}
          onClick={setPreviewView}
        >
          {params[1]}
        </div>
      </div>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    view: state.view,
  };
};
function mapDispatchToProps(dispatch) {
  return {
    setTableView: () => dispatch(setTableView()),
    setPreviewView: () => dispatch(setPreviewView()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(View);
