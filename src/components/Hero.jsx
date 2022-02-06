import heroImg from '../images/heroimg.png';

const Hero = () => {
	return (
		<div className="hero">
			<img src={heroImg} alt="" />

			<div className="hero-side">
				<h3>Welcome</h3>
				<h2>What greater gift than the love of a cat</h2>
			</div>
		</div>
	);
};

export default Hero;
