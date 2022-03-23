import { Link } from "react-router-dom";

const Hero = ({
  image,
  title,
  subtitle,
  to = "/",
  button,
  onClick,
  price,
  breed,
  age,
  city,
  gender,
}) => {
  return (
    <div className="hero">
      <img src={image} alt="" />

      <div className="hero-side">
        <h3>{title}</h3>
        <h2>{subtitle}</h2>
        <h4>{breed}</h4>
        <h4>{age}</h4>
        <h4>{city}</h4>
        <h4>{gender}</h4>

        <h2>{price}</h2>
        <Link to={to} className="hero-button">
          <button onClick={onClick}>{button}</button>
        </Link>
      </div>
    </div>
  );
};

export default Hero;
