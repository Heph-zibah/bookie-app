import Hero from './Components/Hero/Hero';
import Navbar from './Components/Navbar/Navbar';
import Services from './Components/ServiceSection/Services';
import Buy from './Components/BuySection/Buy';
import Testimonials from './Components/Testimonials/Testimonials';
import Footer from './Components/Footer/Footer';

function App() {
	return (
		<>
			<Navbar />
			<Hero />
			<Services />
			<Buy />
			<Testimonials />
			<Footer />
		</>
	);
}

export default App;
