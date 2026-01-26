import { Calendar as CalendarIcon, Download } from "lucide-react";
import { Button } from "@/components/ui/button";

const Calendar = () => {
	const winterLeagueIcsUrl = "https://pittsburgh-ultimate.org/calendar/team?id=323649";

	return (
		<section id="calendar" className="py-20 md:py-32 bg-muted">
			<div className="container mx-auto px-4">
				<div className="max-w-3xl mx-auto text-center mb-12">
					<span className="inline-block font-display text-sm uppercase tracking-[0.2em] text-primary mb-4">
						Stay Updated
					</span>
					<h2 className="font-display text-3xl md:text-5xl font-bold text-foreground uppercase tracking-wide mb-6">
						Team Calendar
					</h2>
					<p className="text-base sm:text-lg text-muted-foreground leading-relaxed px-2 sm:px-0 mb-6">
						View upcoming practices, games, and team events.
					</p>
					<Button
						asChild
						variant="outline"
						className="gap-2"
					>
						<a href={winterLeagueIcsUrl} download="pine-richland-winter-league.ics">
							<Download className="w-4 h-4" />
							Subscribe to Winter League Calendar
						</a>
					</Button>
				</div>

				<div className="max-w-5xl mx-auto">
					<div className="bg-card rounded-2xl overflow-hidden shadow-card">
						<div className="gradient-primary p-4 flex items-center gap-3">
							<CalendarIcon className="w-5 h-5 text-primary-foreground" />
							<span className="font-display text-lg font-bold text-primary-foreground uppercase tracking-wide">
								PR Ultimate Schedule
							</span>
						</div>
						<div className="aspect-[16/10] md:aspect-[16/9]">
							<iframe
								src="https://calendar.google.com/calendar/embed?src=pinerichlandboysultimate%40gmail.com&ctz=America%2FNew_York&showTitle=0&showNav=1&showPrint=0&showTabs=1&showCalendars=0&showTz=0"
								className="w-full h-full border-0"
								title="PR Ultimate Team Calendar"
							/>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Calendar;
