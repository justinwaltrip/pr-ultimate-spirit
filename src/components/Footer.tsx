const Footer = () => {
	return (
		<footer className="bg-slate-900 dark:bg-slate-950 text-white py-12">
			<div className="container mx-auto px-4">
				<div className="text-center">
					<div className="flex items-center justify-center gap-3 mb-6">
						<div className="w-10 h-10 rounded-full gradient-primary flex items-center justify-center">
							<span className="text-primary-foreground font-display font-bold text-lg">
								PR
							</span>
						</div>
						<span className="font-display text-xl font-bold tracking-wide">
							Pine-Richland Ultimate
						</span>
					</div>

					<p className="font-display text-lg uppercase tracking-[0.2em] text-white/80 mb-8">
						Spirit of the Game • Teamwork • Excellence
					</p>

					<div className="flex flex-wrap justify-center gap-6 md:gap-8 mb-8">
						<a
							href="#about"
							className="text-sm text-white/70 hover:text-white transition-colors"
						>
							About
						</a>
						<a
							href="#history"
							className="text-sm text-white/70 hover:text-white transition-colors"
						>
							History
						</a>
						<a
							href="#schedule"
							className="text-sm text-white/70 hover:text-white transition-colors"
						>
							Schedule
						</a>
						<a
							href="#calendar"
							className="text-sm text-white/70 hover:text-white transition-colors"
						>
							Calendar
						</a>
						<a
							href="#faq"
							className="text-sm text-white/70 hover:text-white transition-colors"
						>
							FAQ
						</a>
						<a
							href="#contact"
							className="text-sm text-white/70 hover:text-white transition-colors"
						>
							Contact
						</a>
					</div>

					<p className="text-sm text-white/50">
						© {new Date().getFullYear()} Pine-Richland Ultimate Frisbee. All
						rights reserved.
					</p>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
