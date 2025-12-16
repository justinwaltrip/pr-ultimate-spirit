import { Target, Users, Trophy } from "lucide-react";

const values = [
  {
    icon: Target,
    title: "Spirit of the Game",
    description: "Self-officiating, resolving conflicts respectfully, and competing with integrity while pushing to play at a high level.",
  },
  {
    icon: Users,
    title: "Inclusive Community",
    description: "Co-ed participation and an inclusive team culture that welcomes players of all skill levels and backgrounds.",
  },
  {
    icon: Trophy,
    title: "Competitive Excellence",
    description: "Back-to-back PHUL championships and regional recognition as one of the strongest high school programs.",
  },
];

const About = () => {
  return (
    <section id="about" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-block font-display text-sm uppercase tracking-[0.2em] text-primary mb-4">
            Welcome
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground uppercase tracking-wide mb-6">
            What Makes PR Ultimate Special
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground leading-relaxed px-2 sm:px-0">
            Pine-Richland Ultimate stands out for combining co-ed participation and inclusive team culture 
            with a proven track record in one of the country's strongest high school ultimate regions. 
            Players benefit from dedicated coaching, competitive league play, and a supportive community 
            that treats the team as an integral part of the district's proud athletic tradition.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <div
              key={value.title}
              className="group bg-card rounded-2xl p-8 shadow-card hover:shadow-elevated transition-all duration-300 hover:-translate-y-1"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-14 h-14 rounded-xl gradient-primary flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <value.icon className="w-7 h-7 text-primary-foreground" />
              </div>
              <h3 className="font-display text-xl font-bold text-foreground uppercase tracking-wide mb-3">
                {value.title}
              </h3>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
