import React, { useEffect } from "react";

import "./App.css";
import Sort from "./Components/Sort";
import View from "./Components/View";
import PersonList from "./Components/PersonList";
import { connect } from "react-redux";
import data from "./data.json";
import {
  sendPerson,
  toggleFavourite,
  toggleLang,
  search,
} from "./redux/action";
import LangToggler from "./Components/LangToggler";
import Search from "./Components/Search";

const App = ({
  persons,
  sendPerson,
  view,
  toggleFavourite,
  lang,
  toggleLang,
  search,
}) => {
  useEffect(() => {
    sendPerson(data);
  }, []);

  return (
    <div className="container">
      <LangToggler lang={lang} toggleLang={toggleLang} />
      {lang === true ? (
        <Sort
          title="Сортировка"
          sort={["ID", "Имя", "Возраст", "По возрастанию", "По убыванию"]}
        />
      ) : (
        <Sort title="Sort" sort={["ID", "Name", "Age", "ASC", "DESC"]} />
      )}
      {lang === true ? (
        <View title="Вид" params={["Таблица", "Превью"]} />
      ) : (
        <View title="View" params={["Table", "Preview"]} />
      )}

      <div className={`person-list ${view === "preview" ? "preview" : null}`}>
        {lang === true ? (
          <PersonList
            persons={persons}
            view={view}
            toggleFavourite={toggleFavourite}
            ageLang="лет"
          />
        ) : (
          <PersonList
            persons={persons}
            view={view}
            toggleFavourite={toggleFavourite}
            ageLang="years"
          />
        )}
      </div>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    lang: state.lang,
    persons: state.persons,
    view: state.view,
  };
};
function mapDispatchToProps(dispatch) {
  return {
    sendPerson: (item) => dispatch(sendPerson(item)),
    toggleFavourite: (item) => dispatch(toggleFavourite(item)),
    toggleLang: () => dispatch(toggleLang()),
    search: (item) => dispatch(search(item)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
