import { Calendar, Clock, Info, MapPin } from "lucide-react";

const seasons = [
	{
		name: "Fall Season",
		icon: "🍂",
		details: [
			{ label: "Days", value: "Monday, Wednesday, Thursday" },
			{ label: "Time", value: "4:00 PM - 6:00 PM" },
			{
				label: "Dates",
				value: "August 31 – November 30, 2026",
			},
			{
				label: "Clinic",
				value:
					"One-day new player clinic: September 3, 2026, 4:00 PM - 6:00 PM",
			},
			{
				label: "Location",
				value: "Pine-Richland HS, Softball Field & Field #2",
			},
			{
				label: "Note",
				value:
					"Tuesdays reserved for potential games. Softball uses the outfield Tuesdays and Thursdays through October 1.",
			},
		],
	},
	{
		name: "Winter Season",
		icon: "❄️",
		past: true,
		details: [
			{
				label: "Practice",
				value: "Tuesdays 4:30-6:00 PM at Richland Elementary Gym (Jan-Feb)",
			},
			{
				label: "Games",
				value: "Wednesdays 4:00-5:30 PM at AHN Montour Junction Sports Complex",
			},
			{
				label: "Conditioning",
				value: "Thursdays 4:00-5:30 PM at High School (Athletic Lobby)",
			},
		],
	},
	{
		name: "Spring Season",
		icon: "🌸",
		past: true,
		details: [
			{
				label: "Tournament",
				value: "Queen City Tune Up - April 11-12 in Charlotte, NC",
			},
			{ label: "Schedule", value: "TBD - Check back for announcements" },
		],
	},
];

const Schedule = () => {
	return (
		<section id="schedule" className="py-20 md:py-32 bg-background">
			<div className="container mx-auto px-4">
				<div className="max-w-3xl mx-auto text-center mb-16">
					<span className="inline-block font-display text-sm uppercase tracking-[0.2em] text-primary mb-4">
						Practice Schedule
					</span>
					<h2 className="font-display text-3xl md:text-5xl font-bold text-foreground uppercase tracking-wide mb-6">
						Season Information
					</h2>
					<p className="text-base sm:text-lg text-muted-foreground leading-relaxed px-2 sm:px-0">
						We play year-round with Fall, Winter (indoor), and Spring seasons.
						Division: Open (Gender) Division I.
					</p>
				</div>

				<div className="grid md:grid-cols-3 gap-8">
					{seasons.map((season, _index) => (
						<div
							key={season.name}
							className="bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-elevated transition-all duration-300 hover:-translate-y-1"
						>
							<div className="gradient-primary p-6 text-center">
								<span className="text-4xl mb-2 block">{season.icon}</span>
								<h3 className="font-display text-xl font-bold text-primary-foreground uppercase tracking-wide">
									{season.name}
								</h3>
								{season.past && (
									<span className="inline-block mt-2 px-2 py-0.5 text-[10px] uppercase tracking-wider font-bold bg-primary-foreground/20 text-primary-foreground rounded">
										Last Season
									</span>
								)}
							</div>
							<div className="p-6 space-y-4">
								{season.details.map((detail) => (
									<div key={detail.label} className="flex items-start gap-3">
										<div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
											{detail.label === "Days" ||
											detail.label === "Dates" ||
											detail.label === "Clinic" ||
											detail.label === "Schedule" ||
											detail.label === "Practice" ? (
												<Calendar className="w-3 h-3 text-primary" />
											) : detail.label.includes("Location") ? (
												<MapPin className="w-3 h-3 text-primary" />
											) : detail.label === "Note" ? (
												<Info className="w-3 h-3 text-primary" />
											) : (
												<Clock className="w-3 h-3 text-primary" />
											)}
										</div>
										<div>
											<span className="block font-display text-xs uppercase tracking-wider text-muted-foreground mb-1">
												{detail.label}
											</span>
											<span className="text-sm sm:text-base text-foreground leading-snug">
												{detail.value}
											</span>
										</div>
									</div>
								))}
							</div>
						</div>
					))}
				</div>

				<div className="mt-12 bg-muted rounded-2xl p-8 text-center">
					<div className="flex items-center justify-center gap-2 mb-3">
						<MapPin className="w-5 h-5 text-primary" />
						<span className="font-display text-lg font-bold text-foreground uppercase tracking-wide">
							Home Field
						</span>
					</div>
					<p className="text-muted-foreground">
						Pine-Richland High School
						<br />
						200 Warrendale Rd, Gibsonia, PA 15044
					</p>
				</div>
			</div>
		</section>
	);
};

export default Schedule;
