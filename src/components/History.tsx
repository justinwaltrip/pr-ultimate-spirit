const History = () => {
  return (
    <section id="history" className="py-20 md:py-32 bg-muted">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <div>
            <span className="inline-block font-display text-sm uppercase tracking-[0.2em] text-primary mb-4">
              Our Story
            </span>
            <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground uppercase tracking-wide mb-6">
              Team History
            </h2>
            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p>
                The Pine-Richland ultimate team began as a student-driven club in the mid-2000s with 
                roughly a dozen players and quickly committed to competing in the local PHUL structure.
              </p>
              <p>
                Over time, the program expanded its roster, joined USA Ultimate's high school division, 
                and earned regional recognition by winning multiple league titles, including back-to-back 
                PHUL championships for the boys team.
              </p>
              <p>
                The team reflects the broader Pine-Richland athletic mission, emphasizing academic excellence, 
                personal growth, and sportsmanship alongside competitive success. PR Ultimate leans into 
                ultimate's "Spirit of the Game," teaching athletes to self-officiate, resolve conflicts 
                respectfully, and compete with integrity.
              </p>
            </div>
          </div>

          {/* Stats/Highlights */}
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-card rounded-2xl p-8 shadow-card text-center">
              <span className="block font-display text-4xl md:text-5xl font-bold text-gradient mb-2">
                2x
              </span>
              <span className="font-display text-sm uppercase tracking-wider text-muted-foreground">
                PHUL Champions
              </span>
            </div>
            <div className="bg-card rounded-2xl p-8 shadow-card text-center">
              <span className="block font-display text-4xl md:text-5xl font-bold text-gradient mb-2">
                15+
              </span>
              <span className="font-display text-sm uppercase tracking-wider text-muted-foreground">
                Years Active
              </span>
            </div>
            <div className="bg-card rounded-2xl p-8 shadow-card text-center">
              <span className="block font-display text-4xl md:text-5xl font-bold text-gradient mb-2">
                Co-Ed
              </span>
              <span className="font-display text-sm uppercase tracking-wider text-muted-foreground">
                Inclusive Team
              </span>
            </div>
            <div className="bg-card rounded-2xl p-8 shadow-card text-center">
              <span className="block font-display text-4xl md:text-5xl font-bold text-gradient mb-2">
                D1
              </span>
              <span className="font-display text-sm uppercase tracking-wider text-muted-foreground">
                Open Division
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default History;
