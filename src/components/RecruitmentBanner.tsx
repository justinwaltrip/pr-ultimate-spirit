import { ArrowRight, CalendarDays, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const RecruitmentBanner = () => {
	return (
		<section
			aria-label="New player clinic announcement"
			className="relative z-10 mt-16 bg-primary text-primary-foreground md:mt-20"
		>
			<div className="container mx-auto flex flex-col items-center gap-4 px-4 py-5 text-center md:flex-row md:justify-between md:gap-6 md:py-4 md:text-left">
				<div className="flex min-w-0 items-start gap-3">
					<Sparkles className="mt-0.5 hidden h-6 w-6 shrink-0 text-accent sm:block" />
					<div>
						<p className="font-display text-xs font-bold uppercase tracking-[0.2em] text-accent">
							New players welcome
						</p>
						<h2 className="font-display text-xl font-bold uppercase tracking-wide sm:text-2xl">
							Try Ultimate at our one-day clinic
						</h2>
						<p className="mt-1 flex flex-wrap items-center justify-center gap-2 text-sm text-primary-foreground/85 md:justify-start">
							<CalendarDays className="h-4 w-4 shrink-0" />
							September 3, 2026 · 4:00-6:00 PM · Pine-Richland High School
						</p>
					</div>
				</div>
				<Button variant="secondary" size="lg" asChild className="shrink-0">
					<a href="#contact">
						I'm interested
						<ArrowRight className="ml-2 h-4 w-4" />
					</a>
				</Button>
			</div>
		</section>
	);
};

export default RecruitmentBanner;
