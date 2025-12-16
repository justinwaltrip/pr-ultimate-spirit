import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import teamPhoto from "@/assets/team-photo.png";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={teamPhoto}
          alt="Pine-Richland Ultimate Frisbee Team"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-foreground/70 via-foreground/50 to-foreground/80" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10 text-center">
        <div className="max-w-4xl mx-auto">
          <span className="inline-block font-display text-sm md:text-base uppercase tracking-[0.3em] text-accent mb-4 animate-fade-in-up">
            Pittsburgh High School Ultimate League
          </span>
          
          <h1 className="font-display text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold text-primary-foreground uppercase tracking-wide mb-6 animate-fade-in-up animate-delay-100">
            Pine-Richland
            <span className="block text-gradient bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Ultimate
            </span>
          </h1>
          
          <p className="text-base sm:text-lg md:text-xl text-primary-foreground/90 max-w-2xl mx-auto mb-8 px-2 font-body leading-relaxed animate-fade-in-up animate-delay-200">
            A co-ed high school ultimate frisbee program built on Spirit of the Game, 
            teamwork, and excellence.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up animate-delay-300">
            <Button variant="hero" size="xl" asChild>
              <a href="#contact">Join the Team</a>
            </Button>
            <Button variant="outline" size="xl" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground">
              <a href="#about">Learn More</a>
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <a 
        href="#about" 
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-primary-foreground/70 hover:text-primary-foreground transition-colors animate-float"
        aria-label="Scroll to content"
      >
        <ChevronDown size={32} />
      </a>
    </section>
  );
};

export default Hero;
