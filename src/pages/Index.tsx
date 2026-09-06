import About from "@/components/About";
// import Banner from "@/components/Banner"; // General-purpose announcement banner; uncomment to use
import Calendar from "@/components/Calendar";
import Contact from "@/components/Contact";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import Fundraiser from "@/components/Fundraiser";
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
			{/*
			<Banner
				eyebrow="New players welcome"
				title="Try Ultimate at our one-day clinic"
				detail="September 3, 2026 · 4:00-6:00 PM · Pine-Richland High School"
				callToAction={{ label: "I'm interested", href: "#contact" }}
			/>
			*/}
			<Hero />
			<Fundraiser />
			<Schedule />
			<About />
			<History />
			<News />
			<Calendar />
			<FAQ />
			<SummerOpportunities />
			<Resources />
			<Contact />
			<Footer />
		</main>
	);
};

export default Index;
