import heroImg from '../images/heroimg.png';

const Hero = () => {
	return (
		<div className="hero">
			<img src={heroImg} alt="" />

			<div className="hero-side">
				<h3>Welcome</h3>
				<h2>What greater gift than the love of a cat</h2>
				<div className="hero-button">
					<button>About Us</button>
				</div>
			</div>
		</div>
	);
};

export default Hero;
