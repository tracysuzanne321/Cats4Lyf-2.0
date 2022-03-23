import Hero from "../components/Hero";
import Tile from "../components/Tile";
import heroImg from "../images/heroimg.png";

const Home = ({ catData, addToBasket }) => {
  return (
    <div className="home">
      <Hero
        image={heroImg}
        title="Welcome"
        subtitle="What Greater Gift Than The Love Of a Cat"
        to="/AboutUs"
        button="About Us"
      />
      <div className="gallery">
        {catData.length === 0 ? (
          <div className="loading"></div>
        ) : (
          catData.map((cat, i) => (
            <Tile
              name={cat?.name}
              price={cat?.price}
              image={cat.image}
              key={i}
              id={cat.id}
              addToBasket={addToBasket}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default Home;
