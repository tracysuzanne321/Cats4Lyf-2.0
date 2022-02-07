import heroImg from '../images/heroimg.png';
import { Link } from 'react-router-dom';

const Hero = () => {
	const title = 'Welcome';
	const subTitle = 'What Greater Gift Than The Love Of a Cat.';

	return (
		<div className="hero">
			<img src={heroImg} alt="" />

			<div className="hero-side">
				<h3>{title}</h3>
				<h2>{subTitle}</h2>
				<Link to="/AboutUs" className="hero-button">
					<button>About Us</button>
				</Link>
			</div>
		</div>
	);
};

export default Hero;
