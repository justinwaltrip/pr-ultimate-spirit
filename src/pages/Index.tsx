import About from "@/components/About";
import Calendar from "@/components/Calendar";
import Contact from "@/components/Contact";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import History from "@/components/History";
import Schedule from "@/components/Schedule";

const Index = () => {
	return (
		<main className="min-h-screen">
			<Header />
			<Hero />
			<About />
			<History />
			<Schedule />
			<Calendar />
			<FAQ />
			<Contact />
			<Footer />
		</main>
	);
};

export default Index;
