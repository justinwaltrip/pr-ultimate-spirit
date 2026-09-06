import {
	CalendarDays,
	Clock,
	MapPin,
	Package,
	Scale,
	Users,
} from "lucide-react";

const eventInfo = [
	{
		icon: CalendarDays,
		label: "When",
		value: "Wednesday, September 23",
	},
	{
		icon: Clock,
		label: "Time",
		value: "3:30 – 5:30 PM",
	},
	{
		icon: MapPin,
		label: "Where",
		value: "Goodwill Gibsonia Store",
	},
];

const waysToHelp = [
	{
		icon: Scale,
		title: "Drop Off Donations",
		description:
			"Bring your pre-loved clothes, gear, and household items to the store and they'll be weighed. Goodwill pays us a share of the value based on the weight. More weight, more for the team!",
		detail:
			"Anything Goodwill will accept works: gently used clothing, shoes, electronics, furniture, and more.",
	},
	{
		icon: Users,
		title: "Volunteer to Unload",
		description:
			"We need to help unload the cars of donations. We're looking for at least 3 folks to pitch in for about an hour during the 3:30–5:30 window.",
		detail: "One hour helps more than you'd think. Grab a friend and show up to the Gibsonia store.",
	},
	{
		icon: Package,
		title: "Pre-Drop Off",
		description:
			"Got donations you don't want to hang onto or can't get to the store on the day? Bring them ahead of time and we'll add them to the pile.",
		detail: "Drop-off address: 123 Blue Heron Dr, Wexford PA 15090",
	},
];

const Fundraiser = () => {
	return (
		<section
			id="fundraiser"
			className="py-20 md:py-32 bg-gradient-to-br from-primary/5 to-secondary/5"
		>
			<div className="container mx-auto px-4">
				<div className="max-w-3xl mx-auto text-center mb-14">
					<span className="inline-block font-display text-sm uppercase tracking-[0.2em] text-primary mb-4">
						Upcoming Event
					</span>
					<h2 className="font-display text-3xl md:text-5xl font-bold text-foreground uppercase tracking-wide mb-6">
						Goodwill Fundraiser
					</h2>
					<p className="text-base sm:text-lg text-muted-foreground leading-relaxed px-2 sm:px-0">
						Help us raise money for the team while decluttering your
						home. Every item Goodwill accepts gets weighed, and we earn a
						share of its value, so the scale is in your favor.
					</p>
				</div>

				{/* Event details bar */}
				<div className="max-w-3xl mx-auto mb-14">
					<div className="gradient-primary rounded-2xl shadow-card grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-primary-foreground/20">
						{eventInfo.map((info) => (
							<div
								key={info.label}
								className="flex items-center gap-3 px-5 py-4"
							>
								<info.icon className="w-5 h-5 text-primary-foreground flex-shrink-0" />
								<div className="text-left">
									<div className="text-[11px] uppercase tracking-wider text-primary-foreground/80">
										{info.label}
									</div>
									<div className="font-display text-base font-bold text-primary-foreground">
										{info.value}
									</div>
								</div>
							</div>
						))}
					</div>
				</div>

				{/* Ways to help */}
				<div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
					{waysToHelp.map((way, index) => (
						<div
							key={way.title}
							className="group bg-card rounded-2xl p-6 shadow-card hover:shadow-elevated transition-all duration-300 hover:-translate-y-1"
							style={{ animationDelay: `${index * 100}ms` }}
						>
							<div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center flex-shrink-0 mb-4 group-hover:scale-110 transition-transform duration-300">
								<way.icon className="w-6 h-6 text-primary-foreground" />
							</div>
							<h3 className="font-display text-lg font-bold text-foreground uppercase tracking-wide mb-2">
								{way.title}
							</h3>
							<p className="text-sm text-muted-foreground leading-relaxed mb-3">
								{way.description}
							</p>
							<p className="text-xs text-primary font-medium">{way.detail}</p>
						</div>
					))}
				</div>

				<div className="mt-12 text-center">
					<p className="text-sm text-muted-foreground">
						Have questions or ready to join in?{" "}
						<a
							href="#contact"
							className="text-primary hover:underline font-medium"
						>
							Get in touch
						</a>{" "}
						and we'll figure out the easiest way for you to help.
					</p>
				</div>
			</div>
		</section>
	);
};

export default Fundraiser;
