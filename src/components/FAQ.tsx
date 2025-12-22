import { HelpCircle, Shirt, Footprints, Package, BookOpen } from "lucide-react";

const faqs = [
	{
		icon: Footprints,
		question: "What kind of shoes should players wear?",
		answer:
			"For outdoor grass fields, soccer cleats or football cleats work great. For indoor winter games at turf facilities, turf shoes or indoor soccer shoes are recommended. Avoid metal cleats on turf surfaces.",
	},
	{
		icon: Shirt,
		question: "How do I order a team jersey?",
		answer:
			"Jersey orders are typically placed in early December before the winter season. If you missed the ordering window, please contact us at prultimatecoaches@gmail.com and we'll help you get a jersey for your player.",
	},
	{
		icon: Package,
		question: "What equipment is needed?",
		answer:
			"Players should bring: comfortable athletic clothing, appropriate footwear (see above), a water bottle, and weather-appropriate layers. The team provides discs for practice and games. Optional: athletic gloves for cold weather play.",
	},
	{
		icon: BookOpen,
		question: "What are the basic rules of ultimate frisbee?",
		answer:
			"Ultimate is a non-contact sport played with a flying disc. Teams score by catching the disc in the opponent's end zone. Players cannot run with the disc—they must throw it within 10 seconds. Turnovers occur on incomplete passes, interceptions, or out-of-bounds throws. Ultimate is self-officiated based on 'Spirit of the Game.'",
	},
];

const FAQ = () => {
	return (
		<section id="faq" className="py-20 md:py-32 bg-muted/30">
			<div className="container mx-auto px-4">
				<div className="max-w-3xl mx-auto text-center mb-16">
					<span className="inline-block font-display text-sm uppercase tracking-[0.2em] text-primary mb-4">
						New Players
					</span>
					<h2 className="font-display text-3xl md:text-5xl font-bold text-foreground uppercase tracking-wide mb-6">
						Getting Started
					</h2>
					<p className="text-base sm:text-lg text-muted-foreground leading-relaxed px-2 sm:px-0">
						Everything you need to know to get your player ready for the season.
					</p>
				</div>

				<div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
					{faqs.map((faq) => (
						<div
							key={faq.question}
							className="bg-card rounded-2xl p-6 shadow-card hover:shadow-elevated transition-all duration-300"
						>
							<div className="flex items-start gap-4">
								<div className="w-10 h-10 rounded-full gradient-primary flex items-center justify-center flex-shrink-0">
									<faq.icon className="w-5 h-5 text-primary-foreground" />
								</div>
								<div>
									<h3 className="font-display text-lg font-bold text-foreground mb-2">
										{faq.question}
									</h3>
									<p className="text-muted-foreground leading-relaxed">
										{faq.answer}
									</p>
								</div>
							</div>
						</div>
					))}
				</div>

				<div className="mt-12 text-center">
					<p className="text-muted-foreground">
						Have more questions?{" "}
						<a
							href="mailto:prultimatecoaches@gmail.com"
							className="text-primary hover:underline font-medium"
						>
							Contact us
						</a>
					</p>
				</div>
			</div>
		</section>
	);
};

export default FAQ;
