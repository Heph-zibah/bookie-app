import Hero from './Components/Hero/Hero';
import Navbar from './Components/Navbar/Navbar';
import Services from './Components/ServiceSection/Services';
import Buy from './Components/BuySection/Buy';
import Testimonials from './Components/Testimonials/Testimonials';

function App() {
	return (
		<>
			<Navbar />
			<Hero />
			<Services />
			<Buy />
			<Testimonials />
		</>
	);
}

export default App;
