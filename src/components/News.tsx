import { Newspaper, ExternalLink } from "lucide-react";

const newsItems = [
	{
		title: "Pine-Richland grads on both sides of Pitt-Penn State rivalry at ultimate frisbee nationals",
		source: "TribLive HSSN",
		date: "May 26, 2024",
		url: "https://tribhssn.triblive.com/pine-richland-grads-on-both-sides-of-pitt-penn-state-rivalry-at-ultimate-frisbee-nationals/",
	},
];

const News = () => {
	return (
		<section id="news" className="py-20 md:py-32 bg-muted">
			<div className="container mx-auto px-4">
				<div className="max-w-3xl mx-auto text-center mb-12">
					<span className="inline-block font-display text-sm uppercase tracking-[0.2em] text-primary mb-4">
						In The Press
					</span>
					<h2 className="font-display text-3xl md:text-5xl font-bold text-foreground uppercase tracking-wide mb-6">
						News & Media
					</h2>
				</div>

				<div className="max-w-2xl mx-auto">
					{newsItems.map((item) => (
						<a
							key={item.title}
							href={item.url}
							target="_blank"
							rel="noopener noreferrer"
							className="group block bg-card rounded-2xl p-6 shadow-card hover:shadow-elevated transition-all duration-300 hover:-translate-y-1"
						>
							<div className="flex items-start gap-4">
								<div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
									<Newspaper className="w-6 h-6 text-primary" />
								</div>
								<div className="flex-1">
									<div className="flex items-center gap-2 mb-2">
										<span className="text-xs uppercase tracking-wider text-muted-foreground">
											{item.source}
										</span>
										<span className="text-xs text-muted-foreground">•</span>
										<span className="text-xs text-muted-foreground">
											{item.date}
										</span>
									</div>
									<h3 className="font-display text-lg font-bold text-foreground group-hover:text-primary transition-colors leading-snug">
										{item.title}
									</h3>
								</div>
								<ExternalLink className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors flex-shrink-0 mt-1" />
							</div>
						</a>
					))}
				</div>
			</div>
		</section>
	);
};

export default News;
