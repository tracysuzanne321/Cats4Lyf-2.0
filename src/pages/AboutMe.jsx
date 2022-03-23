import Hero from "../components/Hero";

const AboutMe = ({
  image,
  name,
  price,
  addToBasket,
  id,
  breed,
  gender,
  age,
  city,
}) => {
  const onClick = () => {
    addToBasket({ id, name, price, image });
  };
  return (
    <div className="home">
      <Hero
        image={image}
        title="About Me"
        subtitle={name}
        price={price}
        button="Add To Basket"
        onClick={onClick}
        breed={breed}
        age={age}
        city={city}
        gender={gender}
      />
    </div>
  );
};

export default AboutMe;
