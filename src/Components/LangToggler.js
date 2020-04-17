import React from "react";

export const LangToggler = ({ lang, toggleLang }) => {
  if (lang === true) {
    return (
      <div className="lang-toggler">
        <p>Русский</p>
        <label className="switch" htmlFor="checkbox">
          <input type="checkbox" id="checkbox" onChange={toggleLang} />
          <div className="slider round"></div>
        </label>
        <p>Английский</p>
      </div>
    );
  } else {
    return (
      <div className="lang-toggler">
        <p>Russian</p>
        <label className="switch" htmlFor="checkbox">
          <input
            type="checkbox"
            id="checkbox"
            defaultChecked
            onChange={toggleLang}
          />
          <div className="slider round"></div>
        </label>
        <p>English</p>
      </div>
    );
  }
};

export default LangToggler;
