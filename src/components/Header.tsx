import { Menu, X } from "lucide-react";
import { useState } from "react";
import logo from "@/assets/logo.svg";
import { ThemeToggle } from "@/components/ThemeToggle";
import { Button } from "@/components/ui/button";

const Header = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const navLinks = [
		{ href: "#about", label: "About" },
		{ href: "#history", label: "History" },
		{ href: "#schedule", label: "Schedule" },
		{ href: "#calendar", label: "Calendar" },
		{ href: "#contact", label: "Contact" },
	];

	return (
		<header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
			<div className="container mx-auto px-4">
				<nav className="flex items-center justify-between h-16 md:h-20">
					<a className="flex items-center gap-3" href="/" type="button">
						<img
							src={logo}
							alt="PR Ultimate Logo"
							className="w-10 h-10 object-contain dark:invert"
						/>
						<div className="hidden sm:block">
							<span className="font-display text-lg md:text-xl font-bold tracking-wide text-foreground">
								PR Ultimate
							</span>
						</div>
					</a>

					{/* Desktop Navigation */}
					<div className="hidden md:flex items-center gap-8">
						{navLinks.map((link) => (
							<a
								key={link.href}
								href={link.href}
								className="font-display text-sm uppercase tracking-wider text-muted-foreground hover:text-primary transition-colors duration-200"
							>
								{link.label}
							</a>
						))}
						<ThemeToggle />
						<Button variant="hero" size="sm">
							Join Team
						</Button>
					</div>

					{/* Mobile Menu Button */}
					<button
						className="md:hidden p-2 text-foreground"
						onClick={() => setIsMenuOpen(!isMenuOpen)}
						aria-label="Toggle menu"
						type="button"
					>
						{isMenuOpen ? <X size={24} /> : <Menu size={24} />}
					</button>
				</nav>

				{/* Mobile Navigation */}
				{isMenuOpen && (
					<div className="md:hidden py-4 border-t border-border animate-fade-in-up">
						<div className="flex flex-col gap-4">
							{navLinks.map((link) => (
								<a
									key={link.href}
									href={link.href}
									className="font-display text-sm uppercase tracking-wider text-muted-foreground hover:text-primary transition-colors duration-200 py-2"
									onClick={() => setIsMenuOpen(false)}
								>
									{link.label}
								</a>
							))}
							<div className="flex items-center gap-4 mt-2">
								<ThemeToggle />
								<Button variant="hero" size="sm" className="w-fit">
									Join Team
								</Button>
							</div>
						</div>
					</div>
				)}
			</div>
		</header>
	);
};

export default Header;
