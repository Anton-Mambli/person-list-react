import React from "react";

const PersonList = ({ persons, view, toggleFavourite, ageLang }) => {
  const personArr = persons.concat();
  if (view === "table") {
    return personArr.map((item, index) => {
      return (
        <div className="person-item" key={index}>
          <img
            className="persons-item__img"
            src={`images/${item.image}.svg`}
            alt={item.name}
          />
          <p className="persons-item__name">{item.name}</p>
          <p className="persons-item__age">
            {item.age} {ageLang}
          </p>
          <p className="persons-item__phone">{item.phone}</p>

          <p className="persons-item__favourite">
            {item.favourite ? (
              <i
                className="fas fa-star"
                onClick={() => {
                  personArr[index].favourite = !personArr[index].favourite;
                  toggleFavourite(personArr);
                }}
              ></i>
            ) : (
              <i
                className="far fa-star"
                onClick={() => {
                  personArr[index].favourite = !personArr[index].favourite;
                  toggleFavourite(personArr);
                }}
              ></i>
            )}
          </p>
        </div>
      );
    });
  } else {
    return personArr.map((item, index) => {
      return (
        <div
          className={`person-item preview ${item.video ? "full" : null}`}
          key={index}
        >
          <div className="person-item__info">
            <div className="person-item__top">
              <img
                className="persons-item__img"
                src={`images/${item.image}.svg`}
                alt={item.name}
              />
              <p className="persons-item__name">{item.name}</p>

              <p className="persons-item__favourite">
                {item.favourite ? (
                  <i
                    className="fas fa-star"
                    onClick={() => {
                      personArr[index].favourite = !personArr[index].favourite;
                      toggleFavourite(personArr);
                    }}
                  ></i>
                ) : (
                  <i
                    className="far fa-star"
                    onClick={() => {
                      personArr[index].favourite = !personArr[index].favourite;
                      toggleFavourite(personArr);
                    }}
                  ></i>
                )}
              </p>
            </div>

            <div className="person-item__bottom">
              <p className="persons-item__age">
                {item.age} {ageLang}
              </p>
              <p className="persons-item__phone">{item.phone}</p>
              <p className="persons-item__text">{item.phrase}</p>
            </div>
          </div>
          {item.video ? (
            <div className="person-item__video">
              <video controls="controls">
                <source src={`/videos/${item.video}.mp4`} />
              </video>
            </div>
          ) : null}
        </div>
      );
    });
  }
};

export default PersonList;
