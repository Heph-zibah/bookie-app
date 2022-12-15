import Hero from './Components/Hero/Hero';
import Navbar from './Components/Navbar/Navbar';
import Services from './Components/ServiceSection/Services';
import Buy from './Components/BuySection/Buy';
import Testimonials from './Components/Testimonials/Testimonials';
import Footer from './Components/Footer/Footer';
import Newsletter from './Components/Newsletter/Newsletter';
import Books from './Components/Books/Books';

function App() {
	return (
		<>
			<Navbar />
			<Hero />
			<Services />
			<Buy />
			<Books />
			<Testimonials />
			<Newsletter />
			<Footer />
		</>
	);
}

export default App;
