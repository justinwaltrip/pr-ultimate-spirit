import { Calendar, GraduationCap, Plane, Trophy } from "lucide-react";
import { Button } from "@/components/ui/button";

const opportunities = [
	{
		icon: Trophy,
		title: "2026 HS State Championships",
		description:
			"The pinnacle of Pennsylvania high school ultimate competition.",
		details: "May 23-24, 2026 • Turner Valley",
		link: "https://pittsburgh-ultimate.org/e/2026-pa-hs-state-championships",
		linkText: "Learn More",
	},
	{
		icon: Plane,
		title: "Youth Travel Teams",
		description:
			"Join Pittsburgh's elite youth travel program and compete at the highest level.",
		details: "Applications open now for summer season",
		link: "https://docs.google.com/forms/d/e/1FAIpQLSeBCmRg0f6N9AVL-QzKQOniDbR8tRfaBWyi3mNNAx6IdnR5Qg/viewform",
		linkText: "Player Interest Form",
	},
	{
		icon: Calendar,
		title: "Elite Ultimate Academy",
		description:
			"Elite Ultimate Academy camp for skill development with experienced coaches.",
		details: "Multiple sessions throughout summer",
		link: "https://pittsburgh-ultimate.org/e/elite-ultimate-academy-2026",
		linkText: "View Camps",
	},
	{
		icon: GraduationCap,
		title: "PA College Ultimate",
		description:
			"Continue your ultimate career at the collegiate level. Pennsylvania has strong programs across all divisions.",
		details: "Explore teams like Pitt, Penn State, CMU & more",
		link: "https://usaultimate.org/college/",
		linkText: "Explore Teams",
	},
];

const SummerOpportunities = () => {
	return (
		<section
			id="summer"
			className="py-20 md:py-32 bg-gradient-to-br from-primary/5 to-secondary/5"
		>
			<div className="container mx-auto px-4">
				<div className="max-w-3xl mx-auto text-center mb-16">
					<span className="inline-block font-display text-sm uppercase tracking-[0.2em] text-primary mb-4">
						Beyond the Season
					</span>
					<h2 className="font-display text-3xl md:text-5xl font-bold text-foreground uppercase tracking-wide mb-6">
						Summer Opportunities
					</h2>
					<p className="text-base sm:text-lg text-muted-foreground leading-relaxed px-2 sm:px-0">
						Take your game to the next level with tournaments, travel teams,
						camps, and pathways to college ultimate.
					</p>
				</div>

				<div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
					{opportunities.map((opportunity, index) => (
						<div
							key={opportunity.title}
							className="group bg-card rounded-2xl p-6 shadow-card hover:shadow-elevated transition-all duration-300 hover:-translate-y-1"
							style={{ animationDelay: `${index * 100}ms` }}
						>
							<div className="flex items-start gap-4">
								<div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
									<opportunity.icon className="w-6 h-6 text-primary-foreground" />
								</div>
								<div className="flex-1 min-w-0">
									<h3 className="font-display text-lg font-bold text-foreground uppercase tracking-wide mb-2">
										{opportunity.title}
									</h3>
									<p className="text-sm text-muted-foreground leading-relaxed mb-2">
										{opportunity.description}
									</p>
									<p className="text-xs text-primary font-medium mb-3">
										{opportunity.details}
									</p>
									<Button
										variant="outline"
										size="sm"
										asChild
										className="text-xs"
									>
										<a
											href={opportunity.link}
											target="_blank"
											rel="noopener noreferrer"
										>
											{opportunity.linkText}
										</a>
									</Button>
								</div>
							</div>
						</div>
					))}
				</div>

				<div className="mt-12 text-center">
					<p className="text-sm text-muted-foreground">
						Questions about summer programs?{" "}
						<a
							href="#contact"
							className="text-primary hover:underline font-medium"
						>
							Contact our coaches
						</a>
					</p>
				</div>
			</div>
		</section>
	);
};

export default SummerOpportunities;
