import { useLocation } from "react-router-dom";
import React from "react";

function useQuery() {
  const { search } = useLocation();
  return React.useMemo(() => new URLSearchParams(search), [search]);
}

const AboutMe = ({ catData, addToBasket }) => {
  const query = useQuery();
  const catName = query.get("id");
  const cat = catData.filter((c) => c.name === catName)[0];
  const onClick = () => {
    addToBasket(cat);
  };

  return cat ? (
    <div className="home">
      {
        <div className="about-me">
          <img src={cat.image} alt="" />

          <div className="hero-side">
            <h3>About Me</h3>
            <h2>Name: {cat.name}</h2>
            <h4>Breed: {cat.breed}</h4>
            <h4>Age: {cat.age}</h4>
            <h4>Location: {cat.city}</h4>
            <h4>Sex: {cat.gender}</h4>
            <h2>Price: £{cat.price}</h2>
            <button className="about-button" onClick={onClick}>
              Add To Basket
            </button>
          </div>
        </div>
      }
    </div>
  ) : (
    <div className="loading"></div>
  );
};

export default AboutMe;
