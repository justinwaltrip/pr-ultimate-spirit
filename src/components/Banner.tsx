import { ReactNode } from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface BannerProps {
	/** Small uppercase label shown above the title. */
	eyebrow?: string;
	/** Main heading shown in the banner. */
	title: string;
	/** Optional supporting detail rendered below the title. */
	detail?: ReactNode;
	/** Optional right-side call-to-action (defaults to an anchor/button). */
	callToAction?: {
		label: string;
		href: string;
	};
}

/**
 * A general-purpose full-width announcement banner.
 *
 * Usage:
 *   <Banner
 *     eyebrow="New players welcome"
 *     title="Try Ultimate at our one-day clinic"
 *     detail="September 3, 2026 · 4:00-6:00 PM · Pine-Richland High School"
 *     callToAction={{ label: "I'm interested", href: "#contact" }}
 *   />
 *
 * Set `callToAction` to omit the CTA entirely.
 */
const Banner = ({ eyebrow, title, detail, callToAction }: BannerProps) => {
	return (
		<section
			aria-label={title}
			className="relative z-10 mt-16 bg-primary text-primary-foreground md:mt-20"
		>
			<div className="container mx-auto flex flex-col items-center gap-4 px-4 py-5 text-center md:flex-row md:justify-between md:gap-6 md:py-4 md:text-left">
				<div className="min-w-0">
					{eyebrow && (
						<p className="font-display text-xs font-bold uppercase tracking-[0.2em] text-accent">
							{eyebrow}
						</p>
					)}
					<h2 className="font-display text-xl font-bold uppercase tracking-wide sm:text-2xl">
						{title}
					</h2>
					{detail && (
						<p className="mt-1 flex flex-wrap items-center justify-center gap-2 text-sm text-primary-foreground/85 md:justify-start">
							{detail}
						</p>
					)}
				</div>
				{callToAction && (
					<Button variant="secondary" size="lg" asChild className="shrink-0">
						<a href={callToAction.href}>
							{callToAction.label}
							<ArrowRight className="ml-2 h-4 w-4" />
						</a>
					</Button>
				)}
			</div>
		</section>
	);
};

export default Banner;
