import { ExternalLink, Mail, MessageCircle, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

const Contact = () => {
	return (
		<section id="contact" className="py-20 md:py-32 bg-muted">
			<div className="container mx-auto px-4">
				<div className="max-w-4xl mx-auto">
					<div className="text-center mb-12">
						<span className="inline-block font-display text-sm uppercase tracking-[0.2em] text-primary mb-4">
							Get Involved
						</span>
						<h2 className="font-display text-3xl md:text-5xl font-bold text-foreground uppercase tracking-wide mb-6">
							Join the Team
						</h2>
						<p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed px-2 sm:px-0">
							Interested in joining the team? There are no formal tryouts; all
							skill levels are welcome! Practices are open to any middle or high
							school student in the Pine-Richland School District.
						</p>
					</div>

					{/* Registration Info */}
					<div className="bg-primary/10 border border-primary/20 rounded-2xl p-6 mb-8 text-center">
						<h3 className="font-display text-lg font-bold text-foreground uppercase tracking-wide mb-2">
							Registration Required
						</h3>
						<p className="text-muted-foreground mb-4">
							All players need a Pittsburgh Ultimate membership. Sign up before
							December 31 for $12 (or $16 in January).
						</p>
						<Button variant="hero" asChild>
							<a
								href="https://pittsburgh-ultimate.org"
								target="_blank"
								rel="noopener noreferrer"
							>
								Register at pittsburgh-ultimate.org{" "}
								<ExternalLink className="w-4 h-4 ml-2" />
							</a>
						</Button>
					</div>

					<div className="grid md:grid-cols-2 gap-8">
						{/* Coach Contact */}
						<div className="bg-card rounded-2xl p-8 shadow-card">
							<div className="flex items-center gap-4 mb-6">
								<div className="w-12 h-12 rounded-full gradient-primary flex items-center justify-center">
									<Mail className="w-6 h-6 text-primary-foreground" />
								</div>
								<div>
									<h3 className="font-display text-lg font-bold text-foreground uppercase tracking-wide">
										Coach
									</h3>
									<p className="text-muted-foreground">Justin Waltrip</p>
								</div>
							</div>
							<Button variant="hero" className="w-full" asChild>
								<a href="mailto:prultimatecoaches@gmail.com">Contact Coach</a>
							</Button>
						</div>

						{/* Parent Helper Contact */}
						<div className="bg-card rounded-2xl p-8 shadow-card">
							<div className="flex items-center gap-4 mb-6">
								<div className="w-12 h-12 rounded-full gradient-primary flex items-center justify-center">
									<Users className="w-6 h-6 text-primary-foreground" />
								</div>
								<div>
									<h3 className="font-display text-lg font-bold text-foreground uppercase tracking-wide">
										Parent Helper
									</h3>
									<p className="text-muted-foreground">Catherine Fletcher</p>
								</div>
							</div>
							<Button variant="outline" className="w-full" asChild>
								<a href="mailto:cgfletcher1225@gmail.com">Contact Catherine</a>
							</Button>
						</div>
					</div>

					{/* Community Links */}
					<div className="mt-8 grid md:grid-cols-2 gap-4">
						<a
							href="https://groupme.com/join_group/22175371/aFdECd"
							target="_blank"
							rel="noopener noreferrer"
							className="flex items-center justify-center gap-3 bg-card rounded-xl p-4 shadow-card hover:shadow-elevated transition-all duration-300 hover:-translate-y-1"
						>
							<MessageCircle className="w-5 h-5 text-primary" />
							<span className="font-display text-sm font-bold text-foreground uppercase tracking-wide">
								Parent GroupMe
							</span>
						</a>
						<a
							href="https://discord.gg/r4nfrSN7"
							target="_blank"
							rel="noopener noreferrer"
							className="flex items-center justify-center gap-3 bg-card rounded-xl p-4 shadow-card hover:shadow-elevated transition-all duration-300 hover:-translate-y-1"
						>
							<MessageCircle className="w-5 h-5 text-primary" />
							<span className="font-display text-sm font-bold text-foreground uppercase tracking-wide">
								Player Discord
							</span>
						</a>
					</div>

					<div className="mt-12 text-center">
						<p className="text-sm sm:text-base text-muted-foreground">
							Email us at{" "}
							<a
								href="mailto:prultimatecoaches@gmail.com"
								className="text-primary hover:underline font-medium"
							>
								prultimatecoaches@gmail.com
							</a>
						</p>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Contact;
