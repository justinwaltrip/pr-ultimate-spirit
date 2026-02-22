import { BookOpen, Heart, Link2, Shield } from "lucide-react";
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion";

const Resources = () => {
	return (
		<section id="resources" className="py-20 md:py-32 bg-background">
			<div className="container mx-auto px-4">
				<div className="max-w-3xl mx-auto text-center mb-16">
					<span className="inline-block font-display text-sm uppercase tracking-[0.2em] text-primary mb-4">
						Resources
					</span>
					<h2 className="font-display text-3xl md:text-5xl font-bold text-foreground uppercase tracking-wide mb-6">
						Community Guidelines & Resources
					</h2>
					<p className="text-base sm:text-lg text-muted-foreground leading-relaxed px-2 sm:px-0">
						Essential information for players, parents, and community members.
					</p>
				</div>

				<div className="max-w-4xl mx-auto">
					<Accordion type="single" collapsible className="space-y-4">
						<AccordionItem
							value="inclusivity"
							className="bg-card rounded-2xl shadow-card overflow-hidden border-0"
						>
							<AccordionTrigger className="px-6 py-5 hover:no-underline hover:bg-accent/5">
								<div className="flex items-start gap-4 text-left">
									<div className="w-10 h-10 rounded-xl gradient-primary flex items-center justify-center flex-shrink-0">
										<Heart className="w-5 h-5 text-primary-foreground" />
									</div>
									<div>
										<h3 className="font-display text-lg font-bold text-foreground uppercase tracking-wide">
											Inclusivity & Community Norms
										</h3>
										<p className="text-sm text-muted-foreground mt-1 font-normal">
											Building a welcoming team for all
										</p>
									</div>
								</div>
							</AccordionTrigger>
							<AccordionContent className="px-6 pb-6">
								<div className="space-y-4 text-sm text-muted-foreground leading-relaxed">
									<div>
										<h4 className="font-semibold text-foreground mb-2">
											Gender-Inclusive Language
										</h4>
										<ul className="list-disc list-inside space-y-1 ml-2">
											<li>Use "person defense" instead of "man defense"</li>
											<li>Say "go-to" instead of "man on"</li>
											<li>
												Default to "they/them" pronouns until you know someone's
												preferences
											</li>
										</ul>
									</div>
									<div>
										<h4 className="font-semibold text-foreground mb-2">
											Building an Inclusive Team
										</h4>
										<ul className="list-disc list-inside space-y-1 ml-2">
											<li>
												Welcome players of all skill levels and backgrounds
											</li>
											<li>Create opportunities for bring-a-friend events</li>
											<li>Respect everyone's identities and experiences</li>
											<li>
												Address discriminatory remarks or harassment immediately
											</li>
										</ul>
									</div>
									<p className="pt-2">
										<a
											href="https://pittsburgh-ultimate.org/glossary-of-terms"
											target="_blank"
											rel="noopener noreferrer"
											className="text-primary hover:underline font-medium"
										>
											View full glossary of terms →
										</a>
									</p>
								</div>
							</AccordionContent>
						</AccordionItem>

						<AccordionItem
							value="conduct"
							className="bg-card rounded-2xl shadow-card overflow-hidden border-0"
						>
							<AccordionTrigger className="px-6 py-5 hover:no-underline hover:bg-accent/5">
								<div className="flex items-start gap-4 text-left">
									<div className="w-10 h-10 rounded-xl gradient-primary flex items-center justify-center flex-shrink-0">
										<Shield className="w-5 h-5 text-primary-foreground" />
									</div>
									<div>
										<h3 className="font-display text-lg font-bold text-foreground uppercase tracking-wide">
											Player Code of Conduct
										</h3>
										<p className="text-sm text-muted-foreground mt-1 font-normal">
											Standards for behavior and communication
										</p>
									</div>
								</div>
							</AccordionTrigger>
							<AccordionContent className="px-6 pb-6">
								<div className="space-y-4 text-sm text-muted-foreground leading-relaxed">
									<p>
										All players, coaches, and parents are expected to uphold the
										Spirit of the Game and maintain respectful conduct both on
										and off the field.
									</p>
									<div>
										<h4 className="font-semibold text-foreground mb-2">
											Not Tolerated
										</h4>
										<ul className="list-disc list-inside space-y-1 ml-2">
											<li>Discriminatory remarks or harassment</li>
											<li>Threats of violence or intimidation</li>
											<li>
												Inappropriate social media postings from team accounts
											</li>
											<li>Violations of SafeSport policies</li>
										</ul>
									</div>
									<p className="pt-2">
										<a
											href="https://pittsburgh-ultimate.org/conduct-and-communication-policy"
											target="_blank"
											rel="noopener noreferrer"
											className="text-primary hover:underline font-medium"
										>
											Read full Conduct and Communication Policy →
										</a>
									</p>
								</div>
							</AccordionContent>
						</AccordionItem>

						<AccordionItem
							value="parents"
							className="bg-card rounded-2xl shadow-card overflow-hidden border-0"
						>
							<AccordionTrigger className="px-6 py-5 hover:no-underline hover:bg-accent/5">
								<div className="flex items-start gap-4 text-left">
									<div className="w-10 h-10 rounded-xl gradient-primary flex items-center justify-center flex-shrink-0">
										<BookOpen className="w-5 h-5 text-primary-foreground" />
									</div>
									<div>
										<h3 className="font-display text-lg font-bold text-foreground uppercase tracking-wide">
											For Parents & Chaperones
										</h3>
										<p className="text-sm text-muted-foreground mt-1 font-normal">
											Important guidelines for adult leaders
										</p>
									</div>
								</div>
							</AccordionTrigger>
							<AccordionContent className="px-6 pb-6">
								<div className="space-y-4 text-sm text-muted-foreground leading-relaxed">
									<div>
										<h4 className="font-semibold text-foreground mb-2">
											Chaperone Responsibilities
										</h4>
										<ul className="list-disc list-inside space-y-1 ml-2">
											<li>Be present from start to finish of games/events</li>
											<li>
												Introduce yourself to opposing team's adult leaders
											</li>
											<li>
												Have access to player emergency contact information
											</li>
											<li>Help manage any controversies that arise</li>
											<li>
												Teams must forfeit if no chaperone is present (loss of
												playoff eligibility)
											</li>
										</ul>
									</div>
									<div>
										<h4 className="font-semibold text-foreground mb-2">
											Coach-Player Communication Boundaries
										</h4>
										<ul className="list-disc list-inside space-y-1 ml-2">
											<li>Coaches avoid 1-on-1 situations with players</li>
											<li>Player leaders should be last to leave practices</li>
											<li>Coaches don't provide individual rides</li>
											<li>
												Keep doors open during one-on-one meetings when
												necessary
											</li>
											<li>
												Include a third person in emails/texts when appropriate
											</li>
											<li>Respect time boundaries for calls and messages</li>
										</ul>
									</div>
									<p className="italic pt-2">
										Players: Help adults maintain appropriate boundaries by
										staying in groups and communicating through proper channels.
									</p>
								</div>
							</AccordionContent>
						</AccordionItem>

						<AccordionItem
							value="links"
							className="bg-card rounded-2xl shadow-card overflow-hidden border-0"
						>
							<AccordionTrigger className="px-6 py-5 hover:no-underline hover:bg-accent/5">
								<div className="flex items-start gap-4 text-left">
									<div className="w-10 h-10 rounded-xl gradient-primary flex items-center justify-center flex-shrink-0">
										<Link2 className="w-5 h-5 text-primary-foreground" />
									</div>
									<div>
										<h3 className="font-display text-lg font-bold text-foreground uppercase tracking-wide">
											League & Organization Links
										</h3>
										<p className="text-sm text-muted-foreground mt-1 font-normal">
											Official resources and websites
										</p>
									</div>
								</div>
							</AccordionTrigger>
							<AccordionContent className="px-6 pb-6">
								<div className="space-y-3">
									<div className="flex items-start gap-3">
										<div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
										<div>
											<a
												href="https://pittsburgh-ultimate.org"
												target="_blank"
												rel="noopener noreferrer"
												className="text-primary hover:underline font-medium"
											>
												Pittsburgh Ultimate (PHUL)
											</a>
											<p className="text-sm text-muted-foreground">
												League organization, memberships, rosters, schedules,
												and score reporting
											</p>
										</div>
									</div>
									<div className="flex items-start gap-3">
										<div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
										<div>
											<a
												href="https://usaultimate.org"
												target="_blank"
												rel="noopener noreferrer"
												className="text-primary hover:underline font-medium"
											>
												USA Ultimate
											</a>
											<p className="text-sm text-muted-foreground">
												National governing body for ultimate, rules, events, and
												resources
											</p>
										</div>
									</div>
									<div className="flex items-start gap-3">
										<div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
										<div>
											<a
												href="https://www.instagram.com/pghultimate/"
												target="_blank"
												rel="noopener noreferrer"
												className="text-primary hover:underline font-medium"
											>
												@pghultimate
											</a>
											<p className="text-sm text-muted-foreground">
												Pittsburgh Ultimate on Instagram
											</p>
										</div>
									</div>
									<div className="flex items-start gap-3">
										<div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
										<div>
											<a
												href="https://www.instagram.com/impulseultimate/"
												target="_blank"
												rel="noopener noreferrer"
												className="text-primary hover:underline font-medium"
											>
												@impulseultimate
											</a>
											<p className="text-sm text-muted-foreground">
												Pittsburgh Impulse (club team) on Instagram
											</p>
										</div>
									</div>
									<div className="flex items-start gap-3">
										<div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
										<div>
											<a
												href="https://www.instagram.com/pulse_ultimate/"
												target="_blank"
												rel="noopener noreferrer"
												className="text-primary hover:underline font-medium"
											>
												@pulse_ultimate
											</a>
											<p className="text-sm text-muted-foreground">
												Pittsburgh Pulse (club team) on Instagram
											</p>
										</div>
									</div>
								</div>
							</AccordionContent>
						</AccordionItem>
					</Accordion>
				</div>
			</div>
		</section>
	);
};

export default Resources;
