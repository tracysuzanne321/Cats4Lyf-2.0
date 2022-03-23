import Hero from "../components/Hero";
import heroImg from "../images/heroimg.png";

const AboutUs = () => {
  return (
    <div className="home">
      <Hero
        image={heroImg}
        title="About Us"
        subtitle="Why Do We Love Cats So Much?"
        to="/"
        button="Home"
      />
    </div>
  );
};

export default AboutUs;
