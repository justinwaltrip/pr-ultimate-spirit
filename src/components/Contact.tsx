import { Button } from "@/components/ui/button";
import { Mail, Users } from "lucide-react";

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
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Interested in joining the team? There are no formal tryouts; all skill levels are welcome! 
              Practices are open to any middle or high school student in the Pine-Richland School District.
            </p>
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
                <a href="mailto:prultimatecoaches@gmail.com">
                  Contact Coach
                </a>
              </Button>
            </div>

            {/* Team Captains */}
            <div className="bg-card rounded-2xl p-8 shadow-card">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-full gradient-primary flex items-center justify-center">
                  <Users className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="font-display text-lg font-bold text-foreground uppercase tracking-wide">
                    Team Captains
                  </h3>
                  <p className="text-muted-foreground">Nolan Jackson & Bobby Ross</p>
                </div>
              </div>
              <Button variant="outline" className="w-full" asChild>
                <a href="mailto:prultimatecoaches@gmail.com">
                  Get in Touch
                </a>
              </Button>
            </div>
          </div>

          <div className="mt-12 text-center">
            <p className="text-sm text-muted-foreground">
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
