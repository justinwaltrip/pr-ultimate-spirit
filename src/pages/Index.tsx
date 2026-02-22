import About from "@/components/About";
import Calendar from "@/components/Calendar";
import Contact from "@/components/Contact";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import History from "@/components/History";
import News from "@/components/News";
import Resources from "@/components/Resources";
import Schedule from "@/components/Schedule";
import SummerOpportunities from "@/components/SummerOpportunities";

const Index = () => {
	return (
		<main className="min-h-screen">
			<Header />
			<Hero />
			<About />
			<History />
			<News />
			<SummerOpportunities />
			<Schedule />
			<Calendar />
			<FAQ />
			<Resources />
			<Contact />
			<Footer />
		</main>
	);
};

export default Index;
