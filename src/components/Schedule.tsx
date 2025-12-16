import { Calendar, MapPin, Clock } from "lucide-react";

const seasons = [
  {
    name: "Fall Season",
    icon: "🍂",
    details: [
      { label: "Days", value: "Monday, Wednesday, and Thursday" },
      { label: "Time", value: "4:00 PM - 6:00 PM" },
      { label: "Location", value: "Eden Hall Upper Elementary Soccer Field" },
    ],
  },
  {
    name: "Winter Season",
    icon: "❄️",
    details: [
      { label: "Practice", value: "Tuesdays 4:30 PM - 6:00 PM at Richland Elementary Gym" },
      { label: "Winter League", value: "Wednesdays 5:00 PM - 5:30 PM" },
      { label: "League Location", value: "AHN Montour Health & Sports Medicine Center" },
    ],
  },
  {
    name: "Spring Season",
    icon: "🌸",
    details: [
      { label: "Schedule", value: "TBD - Typically similar to Fall schedule" },
      { label: "Updates", value: "Check back for announcements" },
    ],
  },
];

const Schedule = () => {
  return (
    <section id="schedule" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-block font-display text-sm uppercase tracking-[0.2em] text-primary mb-4">
            Practice Schedule
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground uppercase tracking-wide mb-6">
            Season Information
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground leading-relaxed px-2 sm:px-0">
            We play year-round with Fall, Winter (indoor), and Spring seasons.
            Division: Open (Gender) Division I.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {seasons.map((season, index) => (
            <div
              key={season.name}
              className="bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-elevated transition-all duration-300 hover:-translate-y-1"
            >
              <div className="gradient-primary p-6 text-center">
                <span className="text-4xl mb-2 block">{season.icon}</span>
                <h3 className="font-display text-xl font-bold text-primary-foreground uppercase tracking-wide">
                  {season.name}
                </h3>
              </div>
              <div className="p-6 space-y-4">
                {season.details.map((detail) => (
                  <div key={detail.label} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      {detail.label === "Days" || detail.label === "Schedule" || detail.label === "Practice" ? (
                        <Calendar className="w-3 h-3 text-primary" />
                      ) : detail.label.includes("Location") ? (
                        <MapPin className="w-3 h-3 text-primary" />
                      ) : (
                        <Clock className="w-3 h-3 text-primary" />
                      )}
                    </div>
                    <div>
                      <span className="block font-display text-xs uppercase tracking-wider text-muted-foreground mb-1">
                        {detail.label}
                      </span>
                      <span className="text-sm sm:text-base text-foreground leading-snug">{detail.value}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-muted rounded-2xl p-8 text-center">
          <div className="flex items-center justify-center gap-2 mb-3">
            <MapPin className="w-5 h-5 text-primary" />
            <span className="font-display text-lg font-bold text-foreground uppercase tracking-wide">
              Home Field
            </span>
          </div>
          <p className="text-muted-foreground">Eden Hall Upper Elementary Soccer Field</p>
        </div>
      </div>
    </section>
  );
};

export default Schedule;
