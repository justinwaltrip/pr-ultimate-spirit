import {
	CalendarDays,
	CheckCircle2,
	Clock,
	Disc3,
	Globe,
	MapPin,
	Users,
} from "lucide-react";
import { WEBSITE_URL } from "@/lib/website";

const highlights = [
	"Free to attend and open to everyone",
	"New players, returning players, and parents welcome",
	"Learn how to get involved before Fall season kicks off",
];

const InfoSessionFlyer = () => {
	return (
		<div className="min-h-screen bg-muted/60 py-8 print:py-0">
			<div className="mx-auto max-w-[8.5in] px-4 print:max-w-none print:px-0">
				<div className="no-print mb-4 flex items-center justify-between">
					<p className="text-sm text-muted-foreground">
						Save as PDF or print on US Letter (8.5" x 11")
					</p>
					<button
						type="button"
						onClick={() => window.print()}
						className="inline-flex items-center gap-2 rounded-md bg-primary px-4 py-2 font-display text-sm font-bold uppercase tracking-wide text-primary-foreground hover:opacity-90"
					>
						Print Flyer
					</button>
				</div>

				<div className="relative overflow-hidden rounded-none bg-white shadow-elevated print:shadow-none flyer-sheet">
					<div className="gradient-primary h-2.5" />

					<div className="flex items-start justify-between gap-6 p-8 md:p-10">
						<div className="flex-1">
							<p className="font-display text-sm uppercase tracking-[0.35em] text-primary font-bold">
								Meet the Ultimate Frisbee team
							</p>
							<h1 className="font-display mt-3 text-5xl font-bold uppercase leading-[0.95] tracking-tight md:text-6xl">
								Ultimate
								<span className="block text-gradient">Frisbee</span>
								<span className="block text-4xl md:text-5xl">Info Session</span>
							</h1>
							<p className="mt-4 max-w-md text-lg text-muted-foreground">
								Thinking about playing ultimate frisbee this fall? Come
								get the full
								story of our team, program, and season, before
								practice kicks off.
							</p>
						</div>

						<div className="hidden shrink-0 flex-col items-center gap-3 md:flex">
							<div className="flex h-32 w-32 items-center justify-center rounded-full bg-primary/10 print:bg-none">
								<Users className="h-16 w-16 text-primary" />
							</div>
							<p className="max-w-[30ch] p-2 text-center font-display text-3xl font-bold uppercase leading-none text-foreground">
								Sept
								<span className="block text-accent">9</span>
								<span className="block text-xl text-primary">2026</span>
							</p>
						</div>
					</div>

					<div className="mx-8 grid grid-cols-1 gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-3 md:mx-10">
						<div className="bg-card p-5">
							<CalendarDays className="mb-2 h-5 w-5 text-primary" />
							<p className="font-display text-xs uppercase tracking-wider text-muted-foreground">
								When
							</p>
							<p className="font-display text-xl font-bold uppercase">
								Wednesday, Sept 9, 2026
							</p>
							<p className="mt-1 flex items-center gap-1.5 text-sm text-muted-foreground">
								<Clock className="h-4 w-4 shrink-0" /> 6:00 - 7:00 PM
							</p>
						</div>
						<div className="bg-card p-5">
							<MapPin className="mb-2 h-5 w-5 text-primary" />
							<p className="font-display text-xs uppercase tracking-wider text-muted-foreground">
								Where
							</p>
							<p className="font-display text-xl font-bold uppercase">
								Pine-Richland High School
							</p>
							<p className="mt-1 text-sm text-muted-foreground">
								Old LGI room / Room 50
								<br />
								702 Warrendale Rd, Gibsonia, PA 15044
							</p>
						</div>
						<div className="bg-card p-5">
							<Users className="mb-2 h-5 w-5 text-primary" />
							<p className="font-display text-xs uppercase tracking-wider text-muted-foreground">
								Who should come
							</p>
							<p className="font-display text-xl font-bold uppercase">
								Everyone!
							</p>
							<p className="mt-1 text-xs leading-tight text-muted-foreground sm:text-sm">
								Players, newbies & families
							</p>
						</div>
					</div>

					<div className="grid md:grid-cols-2 md:gap-8 p-8 md:p-10">
						<div>
							<h2 className="font-display text-2xl font-bold uppercase tracking-wide">
								What to expect
							</h2>
							<ul className="mt-4 space-y-3">
								{highlights.map((item) => (
									<li key={item} className="flex items-start gap-2.5">
										<CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
										<span className="text-base leading-snug">
											{item}
										</span>
									</li>
								))}
							</ul>
						</div>
						<div className="mt-8 md:mt-0">
							<h2 className="font-display text-2xl font-bold uppercase tracking-wide">
								Stick around
							</h2>
							<p className="mt-4 leading-relaxed text-muted-foreground">
								Ready to play? Our one-day new-player clinic runs{" "}
								<span className="font-semibold text-foreground">
									September 3
								</span>
								, and Fall season practices start{" "}
							<span className="font-semibold text-foreground">
								September 2
							</span>{" "}
							- Monday, Wednesday &
							Thursday 4:00-6:00 PM at Pine-Richland High School.
							No tryouts,
								no pressure.{" "}
								<span className="font-semibold text-foreground">
									All skill levels welcome.
								</span>
							</p>
							<p className="mt-4 text-sm text-muted-foreground">
								Questions? Coach Justin Waltrip
								<br />
								prultimatecoaches@gmail.com
							</p>
						</div>
					</div>

					<div className="gradient-primary flex flex-wrap items-center justify-between gap-2 p-4">
						<p className="flex items-center gap-2 font-display text-lg font-bold uppercase tracking-wide text-primary-foreground">
							<Disc3 className="h-5 w-5" />
							<a
								href={WEBSITE_URL}
								className="transition-opacity hover:opacity-80"
							>
								Pine-Richland Ultimate Frisbee, Open Division I
							</a>
						</p>
						<p className="flex items-center gap-3 font-display text-lg font-bold uppercase tracking-wide text-primary-foreground/80">
							<a
								href={WEBSITE_URL}
								className="flex items-center gap-1.5 transition-opacity hover:opacity-80"
							>
								<Globe className="h-5 w-5" />
								prultimate.com
							</a>
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default InfoSessionFlyer;
